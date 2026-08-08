import DeleteCoupon from "@/components/coupons/Delete";

import { GetFetch } from "@/utils/fetch";

export default async function CouponPage({ params }) {
  const Params = await params;
  const coupon = await GetFetch(`/coupons/${Params.id}`);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items">
        <h4 className="fw-bold"> کد تخفیف:{coupon.code}</h4>
      </div>
      <div className="row gy-4">
        <div className="col-md-3">
          <label className="form-label">کد</label>
          <input
            disabled
            type="text"
            className="form-control"
            placeholder={coupon.code}
          />
        </div>
        <div className="col-md-3">
          درصد{" "}
          <input
            disabled
            type="text"
            className="form-control"
            placeholder={coupon.percentage}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">تاریخ انقضا</label>
          <input
            disabled
            type="text"
            className="form-control"
            placeholder={coupon.expired_at}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">تاریخ ایجاد</label>
          <input
            disabled
            type="text"
            className="form-control"
            placeholder={coupon.created_at}
          />
        </div>

        <DeleteCoupon id={coupon.id} />
      </div>
    </>
  );
}
