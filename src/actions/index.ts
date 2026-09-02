import { ActionError, type ActionErrorCode, defineAction } from "astro:actions";
import { schema } from "./schema.ts";

const DEFAULT_ERROR_PROPERTIES = {
  code: "INTERNAL_SERVER_ERROR" as ActionErrorCode,
  message: "Your message couldn't be sent. Please try again.",
};

export const server = {
  contact: defineAction({
    accept: "form",
    handler: async ({ email, message, name }) => {
      if (!import.meta.env.SLACK_CONTACT_CHANNEL_WEBHOOK) {
        throw new ActionError(DEFAULT_ERROR_PROPERTIES);
      }

      const response = await fetch(
        import.meta.env.SLACK_CONTACT_CHANNEL_WEBHOOK,
        {
          body: JSON.stringify({
            text: "✉️ New message!",
            attachments: [
              {
                fields: [
                  { title: "Name", value: name, short: true },
                  { title: "Email", value: email, short: true },
                  { title: "Message", value: message, short: false },
                ],
              },
            ],
          }),
          headers: { "Content-Type": "application/json" },
          method: "POST",
        },
      );

      if (response.ok) {
        return "Thanks for reaching out! Your message is on its way.";
      }

      throw new ActionError(DEFAULT_ERROR_PROPERTIES);
    },
    input: schema.contact,
  }),
};
