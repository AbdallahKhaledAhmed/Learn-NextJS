import { ReactNode } from "react";

const template = ({ children }: { children: ReactNode }) => {
  return <div><input type="text"/>{children}</div>;
};

export default template;
