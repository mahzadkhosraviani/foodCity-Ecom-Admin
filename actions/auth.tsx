"use server";

import { PostFetchUnAuth } from "@/utils/fetch";
import { handleError } from "@/utils/helper";
import { cookies } from "next/headers";

async function login(state, formData) {
  const cookieStore = await cookies();
  const email = formData.get("email");
  const password = formData.get("password");

  if (email === "" || password === "") {
    return {
      status: "error",
      message: "ایمیل و رمز عبور الزامی است.",
    };
  }
  const data = await PostFetchUnAuth("/auth/login", { email, password });
  if (data.status === "success") {
    cookieStore.set({
      name: "access_token",
      value: data.data.token,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7, //1week
    });
    return {
      status: data.status,
      message: "شما با موفقیت وارد شدید.",
      user: data.data.user,
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}
export { login };
