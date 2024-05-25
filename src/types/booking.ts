import { TFlat } from "./flat";

export type TBookingRequest = {
  id: string;
  flatId: string;
  userId: string;
  name: string;
  profession: string;
  email: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  flat: TFlat;
  createdAt: string;
  updatedAt: string;
};
