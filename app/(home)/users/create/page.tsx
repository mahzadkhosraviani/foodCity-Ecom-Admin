"use client";
import { createUser } from "@/actions/user";
import SubmitButton from "@/components/SubmitButton";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";

export default function CreateUserPage() {
  const [state, formAction] = useActionState(createUser, {
    status: null,
    message: null,
  });
  const router = useRouter();
  useEffect(() => {
    if (!state.message) return;
    toast(state.message, { type: `${state.status}` });
    if (state.status === "success") {
      router.push("/users");
    }
  }, [state]);
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items">
        <h4 className="fw-bold">ایجاد کاربر</h4>
      </div>
      <form className="row gy-4" action={formAction}>
        <div className="col-md-3">
          <label className="form-label">نام</label>
          <input name="name" type="text" className="form-control" />
        </div>
        <div className="col-md-3">
          ایمیل <input name="email" type="text" className="form-control" />
        </div>
        <div className="col-md-3">
          <label className="form-label">شماره تماس</label>
          <input name="cellphone" type="text" className="form-control" />
        </div>
        <div className="col-md-3">
          <label className="form-label">رمز عبور</label>
          <input name="password" type="text" className="form-control" />
        </div>
        <div>
          <SubmitButton title="ایجاد کاربر" style="btn btn-outline-dark mt-3" />
        </div>
      </form>
    </>
  );
}
