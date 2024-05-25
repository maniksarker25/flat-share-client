import { z } from "zod";

export const bookingRequestValidationSchema = z.object({
  name: z.string({
    required_error: "name is required",
    invalid_type_error: "Name must be a valid string",
  }),
  profession: z.string({
    required_error: "Profession is required",
    invalid_type_error: "Profession must be a valid string",
  }),
});
