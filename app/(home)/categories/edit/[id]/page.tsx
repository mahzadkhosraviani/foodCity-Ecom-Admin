import EditCategory from "@/components/categories/Edit";
import { GetFetch } from "@/utils/fetch";

export default async function EditCategoryPage({ params }) {
  const Params = await params;
  const category = await GetFetch(`/categories/${Params.id}`);
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items">
        <h4 className="fw-bold">ویرایش دسته بندی:{category.name}</h4>
      </div>
      <EditCategory category={category} />
    </>
  );
}
