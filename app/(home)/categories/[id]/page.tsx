import DeleteUser from "@/components/users/Delete";
import { GetFetch } from "@/utils/fetch";

export default async function CategoryPage({ params }) {
  const Params = await params;
  const category = await GetFetch(`/categories/${Params.id}`);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items">
        <h4 className="fw-bold"> دسته بندی:{category.name}</h4>
      </div>
      <div className="row gy-4">
        <div className="col-md-3">
          <label className="form-label">نام</label>
          <input
            disabled
            type="text"
            className="form-control"
            placeholder={category.name}
          />
        </div>
        <div className="col-md-3">
          توضیحات{" "}
          <input
            disabled
            type="text"
            className="form-control"
            placeholder={category.description}
          />
        </div>
      </div>
      <DeleteUser id={category.id} />
    </>
  );
}
