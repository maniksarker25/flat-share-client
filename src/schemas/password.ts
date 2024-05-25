import { z } from "zod";

export const changePasswordValidationSchema = z.object({
  currentPassword: z.string({ required_error: "Password is required" }),
  newPassword: z.string({ required_error: "New Password is required" }),
  retypeNewPassword: z.string({
    required_error: " Please Retype New Password",
  }),
});
