import { prisma } from "@/lib/prisma";

async function addTodo(formData: FormData) {
  "use server";
  const task = formData.get("todo") as string;
  const newTodo = await prisma.todo.create({ data: { task: task } });
  console.log(newTodo);
}

async function getTodos() {
  const tasks = await prisma.todo.findMany({
    select: { id: true, task: true },
  });
  return tasks;
}

export default async function Form() {
  const tasks = await getTodos();
  return (
    <div className="min-h-screen center flex-col gap-5 w-100 mx-auto">
      <form action={addTodo} className="space-y-3 w-full">
        <div>
          <div className="mt-2">
            <input
              placeholder="Task"
              type="text"
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              name="todo"
            />
          </div>
        </div>
        <button className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80">
          Submit
        </button>
      </form>
      <div className="w-full">
        {tasks.map((task) => (
          <div className="flex justify-between w-full">
            <p>{task.task}</p>
            <div className="flex">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
