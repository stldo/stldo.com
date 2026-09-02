export interface GithubRepository {
  description: string;
  name: string;
  url: string;
}

export async function getGithubUserRepositories(
  user: string,
  selfDescription?: string,
) {
  const headers: Record<string, string> = { "User-Agent": "stldo" };
  const url = `https://api.github.com/users/${user}/repos?sort=pushed`;

  if (import.meta.env.LIST_REPOSITORIES_TOKEN) {
    headers.Authorization = `Bearer ${import.meta.env.LIST_REPOSITORIES_TOKEN}`;
  }

  const repositories = await fetch(url, { headers });

  if (!repositories.ok) {
    throw new Error(await repositories.text());
  }

  const active: GithubRepository[] = [];
  const archived: GithubRepository[] = [];
  const json = await repositories.json();

  for (const repository of json) {
    const description =
      repository.name === "stldo.com" && selfDescription
        ? selfDescription
        : `${repository.description}`.endsWith(".")
          ? `${repository.description}`
          : `${repository.description}.`;

    if (repository.archived) {
      archived.push({
        description,
        name: repository.name,
        url: repository.html_url,
      });
    } else {
      active.push({
        description,
        name: repository.name,
        url: repository.html_url,
      });
    }
  }

  return { active, archived };
}
