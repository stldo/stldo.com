import { z } from "astro/zod";

const DEFAULT_CONTACT_EMAIL_ERROR = "Please enter your email address";
const DEFAULT_CONTACT_MESSAGE_ERROR = "Please enter your request";
const DEFAULT_CONTACT_NAME_ERROR = "Please enter your name";

export const schema = {
  contact: z.object({
    email: z
      .string({ error: DEFAULT_CONTACT_EMAIL_ERROR })
      .trim()
      .min(1, DEFAULT_CONTACT_EMAIL_ERROR)
      .pipe(z.email("This email address doesn't seems valid")),
    message: z
      .string({ error: DEFAULT_CONTACT_MESSAGE_ERROR })
      .trim()
      .min(1, DEFAULT_CONTACT_MESSAGE_ERROR),
    name: z
      .string({ error: DEFAULT_CONTACT_NAME_ERROR })
      .trim()
      .min(1, DEFAULT_CONTACT_NAME_ERROR),
  }),
};
