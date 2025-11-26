import { redirect } from "next/navigation";

const NonExisting = () => {
  redirect("/not-found");
  return <></>;
};

export default NonExisting;
