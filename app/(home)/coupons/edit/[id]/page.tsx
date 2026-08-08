import EditCoupon from "@/components/coupons/Edit";

import { GetFetch } from "@/utils/fetch";

export default async function EditCouponPage({ params }) {
  const Params = await params;
  const coupon = await GetFetch(`/coupons/${Params.id}`);
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items">
        <h4 className="fw-bold">ویرایش کد تخفیف:{coupon.code}</h4>
      </div>
      <EditCoupon coupon={coupon} />
    </>
  );
}
