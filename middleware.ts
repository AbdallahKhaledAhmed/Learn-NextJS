import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    NextResponse.redirect(new URL("/", req.url));
  }
}
