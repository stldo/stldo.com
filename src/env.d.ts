interface ImportMetaEnv {
  readonly LIST_REPOSITORIES_TOKEN?: string;
  readonly SLACK_CONTACT_CHANNEL_WEBHOOK?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
