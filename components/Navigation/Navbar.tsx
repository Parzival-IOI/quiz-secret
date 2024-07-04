'use client';
import { NavPath } from "@/libs/data"
import Link from "next/link";
import { usePathname } from "next/navigation";
import Mobile from "@/components/Navigation/Mobile";
import { Home } from "../Icon";
import Web from "@/components/Navigation/Web";

const Navbar = (props: {userRole: string}) => {
  

  const home = NavPath[0];
  const nav = NavPath.slice(1, NavPath.length);
  const current = usePathname();
  return (
    <>
      <nav className="w-full h-16 dark:bg-slate-900 bg-slate-300 shadow-sm dark:shadow-slate-600 shadow-slate-400 sm:px-8 px-6">
        <div className="max-w-[120rem] flex justify-between items-center h-full mx-auto">
          <Link href={home.path} className={current === "" || current === "/" ? `text-orange-600` : `dark:text-white text-black`}>
            <Home/>
          </Link>
          <Web current={current} nav={nav} userRole={props.userRole}/>
          <Mobile current={current} nav={nav}  userRole={props.userRole}/>
        </div>
      </nav>
    </>
  )
}

export default Navbar