import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import Link from "next/link"

const Dropdown = (props : {data : {name:string, path: string}[]}) => {
  return (
    <Menu>
      <MenuButton className="px-1 py-1 before:w-0 hover:before:w-full relative transition-all duration-300 before:content-[''] before:transition-all before:absolute before:bottom-0 before:left-0 before:rounded-md before:h-[8%] before:dark:bg-white before:bg-blue-900" >
        Admin
      </MenuButton>
      <MenuItems anchor="bottom" className="font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700 dark:divide-gray-600 z-50">
        <div className="py-2 text-sm text-gray-700 dark:text-gray-400">
          {
            props.data.map((item, index) => {
              return (
                <MenuItem key={index} >
                  <Link  className="block text-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href={item.path}>{item.name}</Link>
                </MenuItem>
              )
            })
          }
        </div>
      </MenuItems>
    </Menu>
  )
}

export default Dropdown