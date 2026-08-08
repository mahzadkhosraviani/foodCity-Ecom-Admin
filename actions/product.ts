"use server";

import { deleteFetch, PostFetch } from "@/utils/fetch";
import { handleError } from "@/utils/helper";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
type ActionState = {
  status: string | null;
  message: string | null;
};
async function createProduct(state: ActionState, formData: FormData) {
  const primary_image = formData.get("primary_image");
  const name = formData.get("name");
  const category_id = formData.get("category_id");
  const price = formData.get("price");
  const quantity = formData.get("quantity");
  if (primary_image.size == 0) {
    return {
      status: "error",
      message: "ارسال تصویر الزامی است.",
    };
  }
  if (name === "") {
    return {
      status: "error",
      message: "فیلد نام الزامی است.",
    };
  }
  if (category_id === null) {
    return {
      status: "error",
      message: "فیلد دسته بندی الزامی است.",
    };
  }
  if (price === "") {
    return {
      status: "error",
      message: "فیلد قیمت الزامی است.",
    };
  }

  if (quantity === "") {
    return {
      status: "error",
      message: "فیلد تعداد الزامی است.",
    };
  }
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token");
  const res = await fetch(`${process.env.API_URL}/products`, {
    method: "POST",
    cache: "no-store",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token?.value}`,
    },
    body: formData,
  });
  const data = await res.json();
  if (data.status === "success") {
    revalidatePath("/products");
    return {
      status: data.status,
      message: "محصول مورد نظر ایجاد شد.",
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}
async function editProduct(state: ActionState, formData: FormData) {
  const id = formData.get("id");
  const primary_image = formData.get("primary_image");
  const images = formData.get("images[]");
  const name = formData.get("name");
  const category_id = formData.get("category_id");
  const price = formData.get("price");
  const quantity = formData.get("quantity");
  if (primary_image.size == 0) {
    formData.delete("primary_image");
  }
  if (images.size == 0) {
    formData.delete("images[]");
  }
  if (id === "" || id === null) {
    return {
      status: "error",
      message: "شناسه محصول الزامی است.",
    };
  }
  if (name === "") {
    return {
      status: "error",
      message: "فیلد نام الزامی است.",
    };
  }
  if (category_id === null) {
    return {
      status: "error",
      message: "فیلد دسته بندی الزامی است.",
    };
  }
  if (price === "") {
    return {
      status: "error",
      message: "فیلد قیمت الزامی است.",
    };
  }

  if (quantity === "") {
    return {
      status: "error",
      message: "فیلد تعداد الزامی است.",
    };
  }
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token");
  const res = await fetch(`${process.env.API_URL}/products/${id}`, {
    method: "POST",
    cache: "no-store",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token?.value}`,
    },
    body: formData,
  });
  const data = await res.json();
  if (data.status === "success") {
    revalidatePath("/products");
    return {
      status: data.status,
      message: "محصول مورد نظر ویرایش شد.",
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}
async function deleteProduct(state: ActionState, formData: FormData) {
  const id = formData.get("id");
  if (id === "" || id === null) {
    return {
      status: "error",
      message: "شناسه محصول الزامی است.",
    };
  }
  const data = await deleteFetch(`/products/${id}`);
  if (data.status === "success") {
    revalidatePath("/products");
    redirect("/products");
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}
export { createProduct, deleteProduct, editProduct };
