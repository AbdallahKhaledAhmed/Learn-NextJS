import { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";


const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col justify-between">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <main className="p-6 w-full">{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
