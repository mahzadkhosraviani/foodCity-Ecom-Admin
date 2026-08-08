"use client";
import { createCoupon } from "@/actions/coupons";
import DatePicker from "react-multi-date-picker";

import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";

import { useActionState, useEffect, useState } from "react";
import { toast } from "react-toastify";

import SubmitButton from "@/components/SubmitButton";
import { useRouter } from "next/navigation";

export default function CreateCouponPage() {
  const [dateExpire, setDateExpire] = useState("");
  const [state, formAction] = useActionState(createCoupon, {
    status: null,
    message: null,
  });
  const router = useRouter();
  useEffect(() => {
    if (!state.message) return;
    toast(state.message, { type: `${state.status}` });
    if (state.status === "success") {
      router.push("/coupons");
    }
  }, [state]);
  function changeDateExpire(value) {
    setDateExpire(
      value.convert(gregorian, gregorian_en).format("YYYY-MM-DD HH:mm:ss"),
    );
  }
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items">
        <h4 className="fw-bold">ایجاد تخفیف</h4>
      </div>
      <form className="row gy-4" action={formAction}>
        <div className="col-md-3">
          <label className="form-label">کد</label>
          <input name="code" type="text" className="form-control" />
        </div>
        <div className="col-md-3">
          درصد <input name="percentage" type="text" className="form-control" />
        </div>
        <div className="col-md-3">
          <label className="form-label">تاریخ انقضا</label>
          <DatePicker
            format="YYYY-MM-DD HH:mm:ss"
            inputClass="form-control"
            calendar={persian}
            locale={persian_fa}
            onChange={changeDateExpire}
          />
          <input name="expired_at" value={dateExpire} type="hidden" />
        </div>
        <div>
          <SubmitButton title="ایجاد تخفیف" style="btn btn-outline-dark mt-3" />
        </div>
      </form>
    </>
  );
}
