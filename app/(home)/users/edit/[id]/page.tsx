import EditUser from "@/components/users/Edit";
import { GetFetch } from "@/utils/fetch";

export default async function EditUserPage({ params }) {
  const Params = await params;
  const user = await GetFetch(`/users/${Params.id}`);
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items">
        <h4 className="fw-bold">ویرایش کاربر:{user.name}</h4>
      </div>
      <EditUser user={user} />
    </>
  );
}
