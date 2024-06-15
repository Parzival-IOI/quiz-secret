import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";
import { getRole, logout } from "@/utils/actions/auth";
import { isLogged } from "@/utils/normal";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Secret QUIZ",
  description: "Sneaky Little Brat",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLogin = isLogged();
  const userRole = await getRole();
  return (
    <html lang="en">
      <body className={`${inter.className} relative overflow-x-hidden`}>
          { isLogin && <Navbar userRole={userRole}/>}
          {children}
      </body>
    </html>
  );
}
