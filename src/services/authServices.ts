import { authKey } from "@/constants/auth";
import { getFromLocalStorage } from "@/utils/localStorage";
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
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    return !!authToken;
  }
};
