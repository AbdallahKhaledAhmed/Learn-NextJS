import { movies } from "../db";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const movie = movies.find((ele) => ele.id === +id);
  return movie
    ? Response.json(movie)
    : new Response("not found", { status: 404 });
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const ind = movies.findIndex((ele) => ele.id === +id);
  if (ind !== -1) {
    const newMovie = await req.json();
    movies[ind] = { ...movies[ind], ...newMovie };
    return Response.json(movies[ind], { status: 201 });
  } else return new Response("not found", { status: 404 });
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const ind = movies.findIndex((ele) => ele.id === +id);
  if (ind !== -1) {
    movies.splice(ind, 1);
    return new Response("movie deleted successfully");
  } else return new Response("not found", { status: 404 });
}
