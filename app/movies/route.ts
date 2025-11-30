import { NextRequest } from "next/server";
import { movies } from "./db";

export async function GET(req: NextRequest) {
  const search = req.nextUrl.searchParams.get("query");
  if (search)
    return Response.json(
      movies.filter((ele) =>
        ele.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  else return Response.json(movies);
}

export async function POST(req: Request) {
  const movie = await req.json();
  movies.push(movie);
  return Response.json(movie, { status: 201 });
}
