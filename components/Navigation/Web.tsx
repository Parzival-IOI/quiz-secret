import Link from 'next/link';
import React from 'react'
import LogoutButton from '../Authentication/LogoutButton';
import Dropdown from '@/components/Navigation/Dropdown';
import { adminPath, otherPath } from '@/utils/data';

const Web = (props: {nav: {path: string, name: string}[], current: string, userRole: string}) => {

  return (
    <div className="sm:flex hidden gap-6 items-center justify-end ml-auto">
      {
        props.userRole === "ROLE_ADMIN" && <Dropdown data={adminPath} name="Admin"/>
      }
      {
        (props.userRole === "ROLE_TEACHER" || props.userRole === "ROLE_ADMIN") &&
        <Link href={otherPath[0].path} className={`${props.current === otherPath[0].path ? 'dark:text-slate-400 text-slate-700 before:w-full' : 'before:w-0 hover:before:w-full' } px-1 py-1 relative transition-all duration-300 before:content-[''] before:transition-all before:absolute before:bottom-0 before:left-0 before:rounded-md before:h-[8%] before:dark:bg-white before:bg-blue-900`}>{otherPath[0].name}</Link>
      }
      <Link href={otherPath[1].path} className={`${props.current === otherPath[1].path ? 'dark:text-slate-400 text-slate-700 before:w-full' : 'before:w-0 hover:before:w-full' } px-1 py-1 relative transition-all duration-300 before:content-[''] before:transition-all before:absolute before:bottom-0 before:left-0 before:rounded-md before:h-[8%] before:dark:bg-white before:bg-blue-900`}>{otherPath[1].name}</Link>
      
      {
        props.nav.map((item, index) => {
          return(
            <Link href={item.path} key={index} className={`${props.current === item.path ? 'dark:text-slate-400 text-slate-700 before:w-full' : 'before:w-0 hover:before:w-full' } px-1 py-1 relative transition-all duration-300 before:content-[''] before:transition-all before:absolute before:bottom-0 before:left-0 before:rounded-md before:h-[8%] before:dark:bg-white before:bg-blue-900`}>{item.name}</Link>
          );
        })
      }
      {
        <LogoutButton/>
      }
    </div>
  )
}

export default Web