import { authKey } from "@/constants/auth";
import { jwtDecode } from "jwt-decode";

export const getUserInfo = () => {
  const authToken = localStorage.getItem(authKey);
  if (authToken) {
    const decodedInfo: any = jwtDecode(authToken);
    return {
      ...decodedInfo,
      role: decodedInfo?.role.toLowerCase(),
    };
  }
};

export const isLoggedIn = () => {
  const authToken = localStorage.getItem(authKey);
  if (authToken) {
    return !!authToken;
  }
};
