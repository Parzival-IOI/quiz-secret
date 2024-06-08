import Link from 'next/link';
import React from 'react'
import LogoutButton from '../Authentication/LogoutButton';

const Web = (props: {nav: {path: string, name: string}[], current: string, logout: Function}) => {
  return (
    <div className="sm:flex hidden gap-6 items-center justify-end ml-auto">
      {
        props.nav.map((item, index) => {
          return(
            <Link href={item.path} key={index} className={`${props.current === item.path ? 'dark:text-slate-400 text-slate-700 before:w-full' : 'before:w-0 hover:before:w-full' } px-1 py-1 relative transition-all duration-300 before:content-[''] before:transition-all before:absolute before:bottom-0 before:left-0 before:rounded-md before:h-[8%] before:dark:bg-white before:bg-blue-900`}>{item.name}</Link>
          );
        })
      }
      {
        <LogoutButton logout={props.logout}/>
      }
    </div>
  )
}

export default Web