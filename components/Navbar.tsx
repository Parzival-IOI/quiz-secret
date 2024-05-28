'use client'

import { NavPath } from "@/utils/data"
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  const current = usePathname();
  return (
    <nav className="w-full flex gap-6 h-16 items-center px-8 bg-slate-900 shadow-sm shadow-slate-600">
        {
            NavPath.map((item, index) => {
                return(
                    <Link href={item.path} key={index} className={`${current === item.path ? 'text-slate-400' : '' } first:mr-auto hover:underline`}>{item.name}</Link>
                );
            })
        }
        <LogoutButton/>
    </nav>
  )
}

export default Navbar