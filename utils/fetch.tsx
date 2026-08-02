import { cookies } from "next/headers";

const GetFetch = async (url) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token");
  const res = await fetch(`${process.env.API_URL}${url}`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token?.value}`,
    },
  });
  if (res.ok) {
    const data = await res.json();

    return data.data;
  }
};
const PostFetch = async (url, body) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token");
  const res = await fetch(`${process.env.API_URL}${url}`, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token.value}`,
    },
    body: JSON.stringify(body),
  });
  return await res.json();
};
const PostFetchUnAuth = async (url, body) => {
  const res = await fetch(`${process.env.API_URL}${url}`, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
};
export { GetFetch, PostFetch, PostFetchUnAuth };
