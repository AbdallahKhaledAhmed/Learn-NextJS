const Tasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Finish project report",
      description: "Complete the final report for the project and submit it.",
      status: "In Progress",
      dueDate: "2025-02-18",
    },
    {
      id: 2,
      title: "Update website content",
      description: "Revise the homepage text to reflect recent changes.",
      status: "Pending",
      dueDate: "2025-02-20",
    },
    {
      id: 3,
      title: "Team meeting",
      description: "Discuss the project milestones and progress with the team.",
      status: "Completed",
      dueDate: "2025-02-15",
    },
  ];

  return (
    <div className="flex flex-col gap-5 p-15">
      <h1 className="font-bold text-3xl">Tasks</h1>
      {tasks.map((task) => (
        <div
          className={`rounded-lg border-l-4 ${
            task.status === "Pending"
              ? "border-red-700"
              : task.status === "Completed"
              ? "border-green-700"
              : "border-yellow-400"
          } p-8 text-sm flex items-center justify-between gap-2 shadow-xl`}
          key={task.id}
        >
          <div>
            <h2 className="text-xl font-bold">{task.title}</h2>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
          </div>
          <div className="flex gap-5">
            <span
              className={`rounded-full p-3 ${
                task.status === "Pending"
                  ? "text-red-700 bg-red-100"
                  : task.status === "Completed"
                  ? "text-green-700 bg-green-100"
                  : "text-yellow-700 bg-yellow-100"
              }`}
            >
              {task.status}
            </span>
            <button className="rounded-lg text-white bg-blue-600 px-4">
              Edit
            </button>
            {task.status !== "Completed" && (
              <button className="rounded-lg text-white bg-green-600 px-4">
                Mark As Complete
              </button>
            )}
            <button>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
