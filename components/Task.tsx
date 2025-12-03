export type TaskType = {
  title: string;
  description: string;
  date: string;
  status: "In Progress" | "Pending" | "Completed";
};

const Task = (props: TaskType) => {
  let borderClass: string;
  let statusClass: string;

  switch (props.status) {
    case "In Progress":
      borderClass = "border-[yellow]";
      statusClass = "bg-yellow-100 text-yellow-600";
      break;
    case "Pending":
      borderClass = "border-[red]";
      statusClass = "bg-red-100 text-red-600";
      break;
    default:
      borderClass = "border-[green]";
      statusClass = "bg-green-100 text-green-600";
  }

  return (
    <div
      className={`rounded-lg border-l-4 bg-white p-6 flex items-center justify-between shadow-md ${borderClass}`}
    >
      <div className="text-sm text-gray-600 space-y-2">
        <strong className="text-xl font-bold text-gray-800">
          {props.title}
        </strong>
        <p>{props.description}</p>
        <p>Due Date: {props.date}</p>
      </div>
      <div className="flex gap-3">
        <span
          className={`px-4 py-3 text-center text-sm rounded-full ${statusClass}`}
        >
          {props.status}
        </span>
        <button className="px-4 py-2 text-white bg-blue-600 rounded-lg transition-colors">
          Edit
        </button>
        {(props.status === "In Progress" || props.status === "Pending") && (
          <button className="px-4 py-2 text-white bg-green-600 rounded-lg transition-colors">
            Mark as Complete
          </button>
        )}
        <button className="px-4 py-2 rounded-lg transition-colors">
          Delete
        </button>
      </div>
    </div>
  );
};
export default Task;
