import { movies } from "../db";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  return new Response(
    JSON.stringify(movies.find((ele) => ele.id === +id) || "not found")
  );
}
