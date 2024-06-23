import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";
import { getRole } from "@/utils/actions/auth";
import { isLogged } from "@/utils/normal";
import { Toaster } from "sonner";




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
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.className} relative min-h-[100vh] overflow-x-hidden`}>
          { isLogin && <Navbar userRole={userRole}/>}
          <Toaster position="bottom-right" visibleToasts={1}/>
          {children}
      </body>
    </html>
  );
}
