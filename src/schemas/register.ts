import { z } from "zod";

export const registerValidationSchema = z.object({
  username: z.string({
    required_error: "Username is required",
    invalid_type_error: "Username must be a string",
  }),
  email: z.string({
    required_error: "Email is required",
    invalid_type_error: "Email must be a string",
  }),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: z
    .string({
      required_error: "Confirm password is required",
      invalid_type_error: "Confirm password must be a string",
    })
    .min(6, "Password must be at least 6 characters"),
});
