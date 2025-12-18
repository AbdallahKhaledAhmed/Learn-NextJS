import { ReactNode } from "react";
import "./globals.css";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col justify-between">
          <div className="flex flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
