"use server";
import { cookies } from "next/headers";

const deleteCookies = (keys: string[]) => {
  keys.forEach((key) => {
    cookies().delete(key);
  });
};

export default deleteCookies;
