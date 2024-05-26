import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";
import { TUserRole } from "./types";
import { USER_ROLE } from "./constants/role";
import { authKey } from "./constants/auth";
import { cookies } from "next/headers";

const AuthRoutes = ["/login", "/register"];
const commonPrivateRoutes = [
  "/dashboard",
  "/dashboard/change-password",
  "/dashboard/profile",
];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = cookies().get(authKey)?.value;
  let decodedData = null;
  if (accessToken) {
    decodedData = jwtDecode(accessToken) as any;
  }
  const role: TUserRole = decodedData?.role?.toLowerCase();

  // check conditions
  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  if (accessToken && commonPrivateRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  if (role === USER_ROLE.ADMIN && pathname.startsWith("/dashboard/admin")) {
    return NextResponse.next();
  }
  if (role === USER_ROLE.USER && pathname.startsWith("/dashboard/user")) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/register", "/dashboard/:path*"],
};
