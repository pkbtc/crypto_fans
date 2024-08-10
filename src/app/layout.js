import { Inter } from "next/font/google";
import "./globals.css";
import Suggestions from "@/components/Suggestions";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen grid grid-cols-10 gap-7 px-10">
          <div className="p-8 col-span-3 hidden lg:block">
            <div className="flex justify-end">
              <NavBar />
            </div>
          </div>
          <div className="col-span-full md:col-span-6 lg:col-span-4 flex flex-col border-gray-300 border-l border-r">
            {children}
          </div>
          <div className="col-span-4 md:col-span-3 hidden md:block w-full">
            <Suggestions />
          </div>
        </div>
      </body>
    </html>
  );
}
