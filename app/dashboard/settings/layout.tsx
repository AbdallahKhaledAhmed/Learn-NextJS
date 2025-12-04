import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-100 to-purple-200 p-10">
      {children}
    </div>
  );
};

export default layout;
