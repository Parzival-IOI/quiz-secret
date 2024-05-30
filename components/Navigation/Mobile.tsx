'use client';
import React, { useState } from 'react'
import { Burger, Cross } from '../Icon';
import LogoutButton from '../LogoutButton';
import Link from 'next/link';

const Mobile = (props: {current: string, nav: {path: string, name: string}[], logout: Function}) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(e => !e);
    console.log(isOpen)
  }
  return (
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
            props.nav.map((item, index) => {
              return(
                <Link href={item.path} onClick={toggle} key={index} className={`${props.current === item.path ? 'text-slate-400' : '' } hover:underline first:mt-8`}>{item.name}</Link>
              );
            })
          }
          {
            <LogoutButton logout={props.logout}/>
          }
        </div>
      </div>
    </div>
  )
}

export default Mobile