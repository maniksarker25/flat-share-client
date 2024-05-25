import { z } from "zod";

export const flatValidationSchema = z.object({
  squareFeet: z.string({
    required_error: "Square feet required",
  }),
  totalBedrooms: z.string({
    required_error: "Total bedrooms is required ",
  }),
  totalRooms: z.string({
    required_error: "Total rooms is required ",
  }),
  detailedDescription: z.string({
    required_error: "Detailed description is required",
  }),
  location: z.string({
    required_error: "Location is required",
  }),
  amenities: z.string({
    required_error: "Amenities is required",
  }),
  rentAmount: z.string({
    required_error: "Rent amount is required ",
  }),
  advancedAmount: z.string({
    required_error: "Advanced amount is required ",
  }),
});
