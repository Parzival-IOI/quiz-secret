import type { Metadata } from "next";
import { Roboto, Kantumruy_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";
import { getRole } from "@/libs/actions/auth";
import { isLogged } from "@/libs/normal";
import { Toaster } from "sonner";


const roboto = Roboto({
  weight: ['700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  preload: false
})

const kantumruyPro = Kantumruy_Pro({
  weight: ['500', '700'],
  style: ['normal', 'italic'],
  subsets: ['khmer'],
  variable: '--font-khmer',
  display: 'swap',
  preload: false
})

export const metadata: Metadata = {
  title: "Quiz Application",
  description: "Beta Quiz",
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
      <body className={`${roboto.variable} ${kantumruyPro.variable} font-mono relative min-h-[100vh] overflow-x-hidden`}>
          { isLogin && <Navbar userRole={userRole}/>}
          <Toaster position="bottom-right" visibleToasts={1}/>
          {children}
      </body>
    </html>
  );
}
