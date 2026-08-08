"use client";

import { useActionState, useEffect } from "react";

import SubmitButton from "../SubmitButton";
import { deleteCategory } from "@/actions/categories";

export default function DeleteCategory({ id }) {
  const [state, formAction] = useActionState(deleteCategory, {
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
