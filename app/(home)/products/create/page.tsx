import CreateProduct from "@/components/products/Create";
import { GetFetch } from "@/utils/fetch";

export default async function CreateProductPage() {
  const categories = await GetFetch("/categories-list");
  

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items">
        <h4 className="fw-bold">ایجاد محصول</h4>
      </div>
      <CreateProduct categories={categories} />
    </>
  );
}
