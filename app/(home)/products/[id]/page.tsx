import DeleteProduct from "@/components/products/Delete";

import { GetFetch } from "@/utils/fetch";
import { numberFormat } from "@/utils/helper";
import Image from "next/image";

export default async function ProductPage({ params }) {
  const Params = await params;
  const product = await GetFetch(`/products/${Params.id}`);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items">
        <h4 className="fw-bold"> محصول:{product.name}</h4>
      </div>
      <div className="row gy-4">
        <div className="col-md-12 mb-4">
          <div className="row justify-content-center">
            <div className="col-md-3">
              <Image
                unoptimized
                className="rounded"
                src={product.primary_image}
                alt="product_image"
                width={350}
                height={235}
              />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <label className="form-label">نام</label>
          <input
            disabled
            type="text"
            className="form-control"
            placeholder={product.name}
          />
        </div>
        <div className="col-md-3">
          دسته بندی
          <input
            disabled
            type="text"
            className="form-control"
            placeholder={product.category}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">وضعیت</label>
          <input
            disabled
            type="text"
            className="form-control"
            placeholder={product.status}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">قیمت</label>
          <input
            disabled
            type="text"
            className="form-control"
            placeholder={numberFormat(product.price)}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">تعداد</label>
          <input
            disabled
            type="text"
            className="form-control"
            placeholder={product.quantity}
          />
        </div>{" "}
        <div className="col-md-3">
          <label className="form-label">قیمت حراجی</label>
          <input
            disabled
            type="text"
            className="form-control"
            placeholder={numberFormat(product.sale_price)}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">تاریخ شروع حراجی</label>
          <input
            disabled
            type="text"
            className="form-control"
            placeholder={product.date_on_sale_from}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">تاریخ پایان حراجی</label>
          <input
            disabled
            type="text"
            className="form-control"
            placeholder={product.date_on_sale_to}
          />
        </div>
        <div className="col-md-12">
          <label className="form-label">توضیحات</label>
          <textarea
            disabled
            rows={5}
            className="form-control"
            defaultValue={product.description}
          />
        </div>
        <div className="col-md-12">
          {product.images.length > 0
            ? product.images.map((item) => (
                <Image
                  unoptimized
                  className="ms-3"
                  key={item.id}
                  src={item.image}
                  width={200}
                  height={130}
                  alt="other-prouct-images"
                />
              ))
            : null}
        </div>
        <DeleteProduct id={product.id} />
      </div>
    </>
  );
}
