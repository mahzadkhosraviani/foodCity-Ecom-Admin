"use server";

import { deleteFetch, PostFetch, PutFetch } from "@/utils/fetch";
import { handleError } from "@/utils/helper";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
type ActionState = {
  status: string | null;
  message: string | null;
};
async function createCategory(state: ActionState, formData: FormData) {
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
async function editCategory(state: ActionState, formData: FormData) {
  const id = formData.get("id");
  const name = formData.get("name");
  const description = formData.get("description");

  if (id === "" || id === null) {
    return {
      status: "error",
      message: "شناسه دسته بندی الزامی است.",
    };
  }
  if (name === "") {
    return {
      status: "error",
      message: "فیلد نام دسته بندی الزامی است.",
    };
  }
  if (description === "") {
    return {
      status: "error",
      message: "فیلد توضیحات الزامی است.",
    };
  }

  const data = await PutFetch(`/categories/${id}`, {
    name,
    description,
  });
  if (data.status === "success") {
    revalidatePath("/categories");
    return {
      status: data.status,
      message: "دسته بندی مورد نظر ویرایش شد.",
      user: data.data.user,
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}
async function deleteCategory(state: ActionState, formData: FormData) {
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
