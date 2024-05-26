import { authKey } from "@/constants/auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import deleteCookies from "./deleteCookies";

export const logoutUser = (router: AppRouterInstance) => {
  localStorage.removeItem(authKey);
  deleteCookies([authKey]);
  router.refresh();
};
