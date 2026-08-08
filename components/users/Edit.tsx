"use client";
import { useActionState, useEffect } from "react";
import SubmitButton from "../SubmitButton";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { editUser } from "@/actions/user";

export default function EditUser({ user }) {
  const [state, formAction] = useActionState(editUser, {
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
    <form className="row gy-4" action={formAction}>
      <div className="col-md-3">
        <label className="form-label">نام</label>
        <input
          name="name"
          defaultValue={user.name}
          type="text"
          className="form-control"
        />
      </div>
      <div className="col-md-3">
        ایمیل{" "}
        <input
          name="email"
          defaultValue={user.email}
          type="text"
          className="form-control"
        />
      </div>
      <div className="col-md-3">
        <label className="form-label">شماره تماس</label>
        <input
          name="cellphone"
          defaultValue={user.cellphone}
          type="text"
          className="form-control"
        />
      </div>
      <div className="col-md-3">
        <label className="form-label">رمز عبور</label>
        <input name="password" type="text" className="form-control" />
      </div>
      <input type="hidden" name="id" defaultValue={user.id} />
      <div>
        <SubmitButton title="ویرایش کاربر" style="btn btn-outline-dark mt-3" />
      </div>
    </form>
  );
}
