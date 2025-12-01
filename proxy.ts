import { NextRequest, NextResponse } from "next/server";

export async function proxy(req: NextRequest) {
  const isLoggedIn = false;
  const currentPath = req.nextUrl.pathname;
  if (!isLoggedIn && currentPath !== "/") {
    return NextResponse.redirect(new URL("/", req.url));
  } else {
    return NextResponse.next();
  }
}
