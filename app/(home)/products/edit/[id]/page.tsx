import EditProduct from "@/components/products/Edit";

import { GetFetch } from "@/utils/fetch";

export default async function EditProductsPage({ params }) {
  const Params = await params;
  const product = await GetFetch(`/products/${Params.id}`);
  const categories = await GetFetch("/categories-list");
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items">
        <h4 className="fw-bold">ویرایش محصول:{product.name}</h4>
      </div>
      <EditProduct categories={categories} product={product} />
    </>
  );
}
