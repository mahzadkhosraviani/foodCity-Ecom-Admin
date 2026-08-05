"use client";
import { createProduct } from "@/actions/product";
import { createUser } from "@/actions/user";
import SubmitButton from "@/components/SubmitButton";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useActionState, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export default function CreateProduct({ categories }) {
  const [image, setImage] = useState(null);
  const primaryImageRef = useRef();
  const [state, formAction] = useActionState(createProduct, {
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
  function setPrimaryImage(e) {
    const file = e.target.files[0];
    const render = new FileReader();
    render.readAsDataURL(file);
    render.onloadend = () => {
      setImage(render.result?.toString());
    };
  }

  return (
    <form className="row gy-4" action={formAction}>
      <div className="col-md-12 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <label className="form-label" htmlFor="">
              تصویر اصلی
            </label>

            <div className={image ? "position-relative" : "d-none"}>
              <img
                className="rounded"
                src={image}
                width={350}
                height={220}
                alt="product-image"
              />
              <div
                className="position-absolute"
                onClick={() => {
                  primaryImageRef.current.value = "";
                  setImage(null);
                }}
                style={{ top: "5px", right: "15px" }}
              >
                <i className="bi bi-x text-danger fs-2 cursor-pointer"></i>
              </div>
            </div>
            <input
              onChange={setPrimaryImage}
              ref={primaryImageRef}
              name="primary-image"
              type="file"
              className={image === null ? "form-control" : "d-none"}
            />
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <label className="form-label">تصاویر</label>
        <input multiple name="images[]" type="file" className="form-control" />
      </div>
      <div className="col-md-3">
        <label className="form-label">نام</label>
        <input name="name" type="text" className="form-control" />
      </div>
      <div className="col-md-3">
        <label className="form-label">دسته بندی</label>
        <select name="category_id" defaultValue="" className="form-select">
          <option value="" disabled>
            انتخاب دسته بندی
          </option>
          {categories.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="col-md-3">
        <label className="form-label">وضعیت</label>
        <select name="status" defaultValue="1" className="form-select">
          <option value="1">فعال</option>
          <option value="0">غیر فعال</option>
        </select>
      </div>
      <div className="col-md-3">
        <label className="form-label">قیمت</label>
        <input name="price" type="text" className="form-control" />
      </div>
      <div className="col-md-3">
        <label className="form-label">تعداد</label>
        <input name="quantity" type="text" className="form-control" />
      </div>
      <div className="col-md-3">
        <label className="form-label">قیمت حراجی</label>
        <input name="sale_price" type="text" className="form-control" />
      </div>

      <div>
        <SubmitButton title="ایجاد محصول" style="btn btn-outline-dark mt-3" />
      </div>
    </form>
  );
}
