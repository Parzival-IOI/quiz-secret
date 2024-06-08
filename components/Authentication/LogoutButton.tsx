'use client'
const LogoutButton = (props: {logout : Function}) => {
  return (
    <div>
        <button type="button" onClick={() => {props.logout()}} className="px-1 py-1 before:w-0 hover:before:w-full relative transition-all duration-300 before:content-[''] before:transition-all before:absolute before:bottom-0 before:left-0 before:rounded-md before:h-[8%] before:dark:bg-white before:bg-blue-900" >Sign out</button>
    </div>
  )
}

export default LogoutButton;