import { NextResponse } from "next/server";

export async function proxy(req) {
  const token = req.cookies.get("access_token");

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/users/:path*",
    "/orders/:path*",
    "/categories/:path*",
    "/transactions/:path*",
    "/coupons/:path*",
    "/products/:path*",
  ],
};
