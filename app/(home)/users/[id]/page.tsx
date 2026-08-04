
import { GetFetch } from "@/utils/fetch";

export default async function UserPage({ params }) {
  const Params = await params;
  const user = await GetFetch(`/users/${Params.id}`);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items">
        <h4 className="fw-bold"> کاربر:{user.name}</h4>
      </div>
      <form className="row gy-4">
        <div className="col-md-3">
          <label className="form-label">نام</label>
          <input
            disabled
            type="text"
            className="form-control"
            placeholder={user.name}
          />
        </div>
        <div className="col-md-3">
          ایمیل{" "}
          <input
            disabled
            type="text"
            className="form-control"
            placeholder={user.email}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">شماره تماس</label>
          <input
            disabled
            type="text"
            className="form-control"
            placeholder={user.cellphone}
          />
        </div>

     
      </form>
    </>
  );
}
