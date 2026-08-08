"use client";

import { createCategory } from "@/actions/categories";
import SubmitButton from "@/components/SubmitButton";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";

export default function CreateCategoryPage() {
  const [state, formAction] = useActionState(createCategory, {
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
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items">
        <h4 className="fw-bold">ایجاد دسته بندی</h4>
      </div>
      <form className="row gy-4" action={formAction}>
        <div className="col-md-3">
          <label className="form-label">نام</label>
          <input name="name" type="text" className="form-control" />
        </div>
        <div className="col-md-3">
          توضیحات{" "}
          <input name="description" type="text" className="form-control" />
        </div>

        <div>
          <SubmitButton
            title="ایجاد دسته بندی "
            style="btn btn-outline-dark mt-3"
          />
        </div>
      </form>
    </>
  );
}
