import { redirect } from "next/navigation";

const OldPage = () => {
  redirect("/new-page");
  return <></>;
};

export default OldPage;
