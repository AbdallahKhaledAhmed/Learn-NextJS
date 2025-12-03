export type AnalyticsType = {
  title: string;
  value: string;
  percentage: string;
};

const AnalyticsCard = (props: AnalyticsType) => {
  const borderClass = props.percentage.startsWith("+")
    ? "border-green-500"
    : "border-red-500";

  return (
    <div
      className={`p-6 flex justify-between items-center rounded-xl border-l-4 bg-white shadow-md ${borderClass}`}
    >
      <div className="space-y-3">
        <p className="text-xl font-semibold text-gray-700">{props.title}</p>
        <p className="text-lg text-gray-600">{props.value}</p>
      </div>
      <div
        className={
          props.percentage.startsWith("+") ? "text-green-600" : "text-red-600"
        }
      >
        {props.percentage}
      </div>
    </div>
  );
};

export default AnalyticsCard;
