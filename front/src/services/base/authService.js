import { httpAxios } from "/src/helper/httpHelper";
import Cookies from "js-cookie";
import stringifySafe from "json-stringify-safe";
export async function signInService(loginDetails) {
  try {
    const response = await httpAxios.post("/user/sign-in", loginDetails);
    if (response.data.status === "success") {
      localStorage.setItem("userDetails", stringifySafe(response.data.payload));
      Cookies.set("authorized", true, {
        expires: 1 / 16,
        sameSite: "strict",
        secure: import.meta.env.VITE_HTTP_ONLY ? false : true,
      });
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error.message;
  }
}
