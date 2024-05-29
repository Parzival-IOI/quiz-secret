'use client'

import { NavPath } from "@/utils/data"
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";
import { useState } from "react";
import { Burger, Cross, Home } from "./Icon";

const Navbar = (props: {logout: Function}) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(e => !e);
    console.log(isOpen)
  }

  const home = NavPath[0];
  const nav = NavPath.slice(1, NavPath.length);

  const current = usePathname();
  return (
    <>
      <nav className="w-full h-16 dark:bg-slate-900 bg-slate-300 shadow-sm shadow-slate-600 flex justify-between items-center sm:px-8 px-6">
        <Link href={home.path} className={current === "" || current === "/" ? `text-orange-600` : `text-white`}>
          <Home/>
        </Link>
        <div className="sm:flex hidden gap-6 items-center justify-end ml-auto">
          {
            nav.map((item, index) => {
              return(
                <Link href={item.path} key={index} className={`${current === item.path ? 'text-slate-400 before:w-full' : 'before:w-0 hover:before:w-full' } px-1 py-1 relative transition-all duration-300 before:content-[''] before:transition-all before:absolute before:bottom-0 before:left-0 before:rounded-md before:h-[8%] before:dark:bg-white before:bg-blue-900`}>{item.name}</Link>
              );
            })
          }
          {
            <LogoutButton logout={props.logout}/>
          }
        </div>
        <div className="block sm:hidden ">
          {
            !isOpen && 
            <button type="button" onClick={toggle} className="p-2 rounded-lg ring-1 ring-slate-500">
              <Burger/>
            </button>
          }
          {isOpen && <div onClick={toggle} className="absolute top-0 left-0 bg-slate-600/30 w-full h-screen"></div>}
          <div className={`${isOpen ? 'translate-x-[45vw]': 'translate-x-[100vw]'} top-0 left-0 h-[100vh] bg-slate-600/90 absolute w-[55%] h-100vh transition ease-in-out duration-1000`}>
            <div className="h-16 flex justify-end items-center px-6">
              <button type="button" onClick={toggle} className=" p-2 rounded-lg ring-1 ring-slate-500 text-white" >
                <Cross/>
              </button>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-8">
              {
                nav.map((item, index) => {
                  return(
                    <Link href={item.path} key={index} className={`${current === item.path ? 'text-slate-400' : '' } hover:underline first:mt-8`}>{item.name}</Link>
                  );
                })
              }
              {
                <LogoutButton logout={props.logout}/>
              }
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar