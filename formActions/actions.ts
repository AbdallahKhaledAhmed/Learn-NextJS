"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function addMovie(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("desc") as string;
  const imgUrl = formData.get("img") as string;

  await prisma.movie.create({ data: { title, description, imgUrl } });
  redirect("/movies");
}

export async function editMovie(formData: FormData) {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const description = formData.get("desc") as string;
  const imgUrl = formData.get("img") as string;

  await prisma.movie.update({
    where: { id },
    data: { title, description, imgUrl },
  });
  redirect("/movies");
}

export async function deleteMovie(formData: FormData) {
  const id = formData.get("id") as string;
  await prisma.movie.delete({ where: { id } });
  redirect("/movies");
}
