"use server";
import { FieldValues } from "react-hook-form";
import setAccessTokenToCookies from "./setAccessTokenToCookie";
import { authKey } from "@/constants/auth";

export const loginUser = async (values: FieldValues) => {
  const res = await fetch(
    `https://flat-share-server-six.vercel.app/api/user/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
      // cache: "no-cache",
      credentials: "include",
    }
  );
  const userInfo = await res.json();
  // if (userInfo?.data?.token) {
  //   setAccessTokenToCookies(userInfo?.data?.token, {
  //     redirect: "/",
  //   });
  // }
  return userInfo;
};
