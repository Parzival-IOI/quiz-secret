import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import Link from "next/link"

const Dropdown = (props : {data : {name:string, path: string}[]}) => {
  return (
    <Menu>
      <MenuButton className="px-1 py-1 before:w-0 hover:before:w-full relative transition-all duration-300 before:content-[''] before:transition-all before:absolute before:bottom-0 before:left-0 before:rounded-md before:h-[8%] before:dark:bg-white before:bg-blue-900" >
        Admin
      </MenuButton>
      <MenuItems anchor="bottom" className="w-32 mt-2 p-2  flex flex-col gap-2 justify-center items-center rounded-lg bg-slate-400/50">
        {
          props.data.map((item, index) => {
            return (
              <MenuItem key={index} >
                <Link  className="px-6 py-1 hover:bg-slate-800 rounded-md" href={item.path}>{item.name}</Link>
              </MenuItem>
            )
          })
        }
      </MenuItems>
    </Menu>
  )
}

export default Dropdown