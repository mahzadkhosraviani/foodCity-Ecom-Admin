"use server";

import { deleteFetch, PostFetch, PutFetch } from "@/utils/fetch";
import { handleError } from "@/utils/helper";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function createCategory(state, formData) {
  const name = formData.get("name");
  const description = formData.get("description");

  if (name === "") {
    return {
      status: "error",
      message: "فیلد نام الزامی است.",
    };
  }
  if (description === "") {
    return {
      status: "error",
      message: "فیلد توضیحات الزامی است.",
    };
  }

  const data = await PostFetch("/categories", { name, description });
  if (data.status === "success") {
    revalidatePath("/categories");
    return {
      status: data.status,
      message: "دسته بندی مورد نظر ایجاد شد.",
      user: data.data.user,
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}
async function editCategory(state, formData) {
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
async function deleteCategory(state, formData) {
  const id = formData.get("id");
  if (id === "" || id === null) {
    return {
      status: "error",
      message: "شناسه دسته بندی الزامی است.",
    };
  }
  const data = await deleteFetch(`/categories/${id}`);
  if (data.status === "success") {
    revalidatePath("/categories");
    redirect("/categories");
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}

export { createCategory, deleteCategory, editCategory };
