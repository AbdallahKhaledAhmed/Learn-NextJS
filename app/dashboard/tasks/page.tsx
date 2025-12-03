import type { TaskType } from "@/components/Task";
import Task from "@/components/Task";

const tasks: TaskType[] = [
  {
    title: "Finish project report",
    description: "Complete the final report for the project and submit it.",
    date: "2025-02-18",
    status: "In Progress",
  },
  {
    title: "Update website content",
    description: "Revise the homepage text to reflect recent changes.",
    date: "2025-02-20",
    status: "Pending",
  },
  {
    title: "Team meeting",
    description: "Discuss the project milestones and progress with the team.",
    date: "2025-02-15",
    status: "Completed",
  },
];

const Tasks = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto mt-10 p-5">
        <h1 className="text-3xl font-bold text-gray-800 mb-10">Tasks</h1>
        <div className="space-y-5">
          {tasks.map((ele, ind) => (
            <Task {...ele} key={ind} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
