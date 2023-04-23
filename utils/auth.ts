import { User } from "@/types/user.type";
import Cookies from "js-cookie";

export const setAccessTokenToCookies = (access_token: string) => {
  Cookies.set("access_token", access_token);
};

export const clearCookies = () => {
  Cookies.remove("access_token");
  Cookies.remove("profile");
};

export const getAccessTokenFromCookies = () =>
  Cookies.get("access_token") || "";

export const getProfileFromCookies = () => {
  const result = Cookies.get("profile");
  return result ? JSON.parse(result) : null;
};

export const setProfileToCookies = (profile: User) => {
  Cookies.set("profile", JSON.stringify(profile));
};
