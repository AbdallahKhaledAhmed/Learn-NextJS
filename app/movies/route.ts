import { movies } from "./db";

export async function GET() {
  return Response.json(movies);
}

export async function POST(req: Request) {
  const movie = await req.json();
  movies.push(movie);
  return Response.json(movies);
}
