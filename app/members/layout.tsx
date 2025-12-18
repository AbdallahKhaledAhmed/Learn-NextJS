import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  team: ReactNode;
  comments: ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex w-full gap-10 *:border *:w-full  p-10">
      {props.team}
      {props.comments}
    </div>
  );
}
