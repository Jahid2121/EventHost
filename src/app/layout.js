import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Event Host",
  description: "This is a simple application that displays events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="max-w-6xl mx-auto mt-5">
      <Navbar />
        {children}
        <Footer />
      </div>
        </body>
    </html>
  );
}
