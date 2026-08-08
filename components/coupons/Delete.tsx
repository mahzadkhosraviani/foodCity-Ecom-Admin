"use client";

import { useActionState } from "react";

import SubmitButton from "../SubmitButton";
import { deleteCoupon } from "@/actions/coupons";

export default function DeleteCoupon({ id }) {
  const [state, formAction] = useActionState(deleteCoupon, {
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
