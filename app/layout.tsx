import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";
import { logout } from "@/utils/auth";
import { isLogged } from "@/utils/normal";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Secret QUIZ",
  description: "Sneaky Little Brat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLogin = isLogged();
  return (
    <html lang="en">
      <body className={`${inter.className} relative overflow-x-hidden`}>
          { isLogin && <Navbar logout={logout}/>}
          {children}
      </body>
    </html>
  );
}
