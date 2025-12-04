export type ActivityType = {
  title: string;
  description: string;
  value: string;
};

const Activity = (props: ActivityType) => {
  return (
    <div className="flex justify-between py-2">
      <div>
        <h3 className="text-lg font-semibold text-gray-700">{props.title}</h3>
        <p className="text-sm text-gray-600">{props.description}</p>
      </div>
      <span className="text-sm text-gray-500">{props.value}</span>
    </div>
  );
};

export default Activity;
