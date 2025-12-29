import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function getTodos() {
  const tasks = await prisma.todo.findMany({
    select: { id: true, task: true },
  });
  return tasks;
}

export async function addTodo(formData: FormData) {
  "use server";
  const task = formData.get("todo") as string;
  const newTodo = await prisma.todo.create({ data: { task: task } });
  revalidatePath("/form");
}

export async function removeTodo(formData: FormData) {
  "use server";
  const todoId = formData.get("todo-id") as string;
  const deletedTodo = await prisma.todo.delete({ where: { id: todoId } });
  revalidatePath("/form");
}

export async function editTodo(formData: FormData) {
  "use server";
  const todoId = formData.get("todo-id") as string;
  const todoNewTask = formData.get("todo-edit") as string;
  const deletedTodo = await prisma.todo.update({
    where: { id: todoId },
    data: { task: todoNewTask },
  });
  revalidatePath("/form");
}
