import axios, { AxiosError, type AxiosInstance } from "axios";
import { toast } from "react-toastify";
import { AuthResponse, RefreshTokenReponse } from "@/types/auth.type";
import { ErrorResponse } from "@/types/utils.type";
import { URL_LOGIN, URL_LOGOUT, URL_REGISTER } from "@/apis/auth.api";
import {
  clearCookies,
  getAccessTokenFromCookies,
  setAccessTokenToCookies,
  setProfileToCookies,
} from "./auth";

export class Http {
  instance: AxiosInstance;
  private accessToken: string;
  constructor() {
    this.accessToken = getAccessTokenFromCookies();
    this.instance = axios.create({
      baseURL: "https://api-ecom.duthanhduoc.com",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
        "expire-access-token": 60 * 60 * 24, // 1 ngày
        "expire-refresh-token": 60 * 60 * 24 * 160, // 160 ngày
      },
    });
    // Add a response interceptor
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config;
        if (url === URL_LOGIN || url === URL_REGISTER) {
          const data = response.data as AuthResponse;
          this.accessToken = data.data.access_token;
          setAccessTokenToCookies(this.accessToken);
          setProfileToCookies(data.data.user);
        } else if (url === URL_LOGOUT) {
          this.accessToken = "";
          clearCookies();
        }
        return response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
const http = new Http().instance;
export default http;
