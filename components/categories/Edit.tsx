"use client";
import { useActionState, useEffect } from "react";
import SubmitButton from "../SubmitButton";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { editCategory } from "@/actions/categories";

export default function EditCategory({ category }) {
  const [state, formAction] = useActionState(editCategory, {
    status: null,
    message: null,
  });
  const router = useRouter();
  useEffect(() => {
    if (!state.message) return;
    toast(state.message, { type: `${state.status}` });
    if (state.status === "success") {
      router.push("/categories");
    }
  }, [state]);
  return (
    <form className="row gy-4" action={formAction}>
      <div className="col-md-3">
        <label className="form-label">نام</label>
        <input
          name="name"
          defaultValue={category.name}
          type="text"
          className="form-control"
        />
      </div>
      <div className="col-md-3">
        توضیحات
        <input
          name="description"
          defaultValue={category.description}
          type="text"
          className="form-control"
        />
      </div>

      <input type="hidden" name="id" defaultValue={category.id} />
      <div>
        <SubmitButton
          title="ویرایش دسته بندی"
          style="btn btn-outline-dark mt-3"
        />
      </div>
    </form>
  );
}
