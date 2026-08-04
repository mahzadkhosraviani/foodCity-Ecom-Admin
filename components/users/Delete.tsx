"use client";
import { deleteUser } from "@/actions/user";
import { useRouter } from "next/router";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";
import SubmitButton from "../SubmitButton";

export default function DeleteUser({ id }) {
  const [state, formAction] = useActionState(deleteUser, {
    status: null,
    message: null,
  });

  return (
    <form action={formAction}>
      <input type="hidden" value={id} name="id" />
      <SubmitButton style="btn btn-dark mt-3" title="حذف" />
    </form>
  );
}
