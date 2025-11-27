import { ReactNode } from "react";
import Header from "./components/Header";
import "./globals.css";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col justify-between">
          <Header />
          <div className="flex justify-between items-center">
            <main>{children}</main>
            <Sidebar />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
