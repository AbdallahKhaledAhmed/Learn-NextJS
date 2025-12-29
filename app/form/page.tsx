import * as actions from "@/actions/actions";

export default async function Form() {
  const tasks = await actions.getTodos();
  return (
    <div className="min-h-screen center flex-col gap-5 w-100 mx-auto">
      <form action={actions.addTodo} className="space-y-3 w-full">
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
      <div className="w-full space-y-3">
        {tasks.map((task) => (
          <div
            className="flex items-center justify-between w-full gap-3"
            key={task.id}
          >
            <div className="center justify-between gap-4 w-full [&_input]:hidden">
              <form className="contents" action={actions.editTodo}>
                <input
                  placeholder="Task"
                  type="text"
                  className="flex! h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="todo-edit"
                  defaultValue={task.task}
                />
                <input type="text" name="todo-id" value={task.id} />
                <button className="inline-flex items-center justify-center rounded-md bg-gray-700 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80">
                  Edit
                </button>
                <button
                  formAction={actions.removeTodo}
                  className="inline-flex items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Delete
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
