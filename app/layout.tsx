import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "My Website",
  description: "This is an amazing website, Trust me bro.",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-linear-to-br from-blue-50 to-indigo-100 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
