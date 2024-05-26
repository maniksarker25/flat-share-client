"use server";
import { authKey } from "@/constants/auth";
import { cookies } from "next/headers";

import { redirect } from "next/navigation";
const setAccessTokenToCookies = (token: string, option?: any) => {
  cookies().set(authKey, token);
  if (option && option.redirect) {
    redirect(option.redirect);
  }
};

export default setAccessTokenToCookies;
