import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "My Website",
  description: "This is an amazing website, Trust me bro.",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
