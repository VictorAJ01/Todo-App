import { z } from "zod";

export const schema = z.object({
  username: z.string({
    required_error: "Username is required",
    invalid_type_error: "Username must be a string",
  }),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .refine(
      (password) => {
        return password.length >= 8;
      },
      { message: "Password must be at least 8 characters long" }
    ),
});
