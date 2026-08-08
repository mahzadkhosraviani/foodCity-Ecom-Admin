"use server";

import { deleteFetch, PostFetch, PutFetch } from "@/utils/fetch";
import { handleError } from "@/utils/helper";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function createCoupon(state, formData) {
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
    revalidatePath("/users");
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
async function editCoupon(state, formData) {
  const id = formData.get("id");
  const name = formData.get("name");
  const email = formData.get("email");
  const cellphone = formData.get("cellphone");
  const password = formData.get("password");
  if (id === "" || id === null) {
    return {
      status: "error",
      message: "شناسه کاربر الزامی است.",
    };
  }
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

  const data = await PutFetch(`/users/${id}`, {
    name,
    email,
    cellphone,
    password,
  });
  if (data.status === "success") {
    revalidatePath("/users");
    return {
      status: data.status,
      message: "کاربر مورد نظر ویرایش شد.",
      user: data.data.user,
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}
async function deleteCoupon(state, formData) {
  const id = formData.get("id");
  if (id === "" || id === null) {
    return {
      status: "error",
      message: "شناسه تخفیف الزامی است.",
    };
  }
  const data = await deleteFetch(`/coupons/${id}`);
  if (data.status === "success") {
    revalidatePath("/coupons");
    redirect("/coupons");
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}

export { createCoupon, deleteCoupon, editCoupon };
