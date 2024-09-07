import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import NavbarAlt from "@/components/header/NavbarAlt";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Unleash 2024",
  description: "Flagship annual conference of Leaders Quarters",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
