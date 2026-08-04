"use server";

import { PostFetch } from "@/utils/fetch";
import { handleError } from "@/utils/helper";
import { revalidatePath } from "next/cache";

async function createUser(state, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const cellphone = formData.get("cellphone");
  const password = formData.get("password");

  if (name === "") {
    return {
      status: "error",
      message: "فیلد نام الزامی است.",
    };
  }
  if (email === "") {
    return {
      status: "error",
      message: "فیلد ایمیل الزامی است.",
    };
  }
  const cellphonePattern = /^(\+98|0)?9\d{9}$/i;
  if (cellphone == "" || !cellphonePattern.test(cellphone)) {
    return {
      status: "error",
      message: "فیلد شماره تماس کاربر نامعتبر است.",
    };
  }
  if (password === "") {
    return {
      status: "error",
      message: "فیلد رمز عبور الزامی است.",
    };
  }
  const data = await PostFetch("/users", { name, email, cellphone, password });
  if (data.status === "success") {
    revalidatePath("/users")
    return {
      status: data.status,
      message: "کاربر مورد نظر ایجاد شد.",
      user: data.data.user,
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}
export { createUser };
