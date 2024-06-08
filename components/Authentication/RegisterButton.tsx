'use client'

import Link from "next/link"

const RegisterButton = (props: {label: string}) => {
  return (
    <div>
        <Link href={"/register"} className="text-blue-500">{props.label}</Link>
    </div>
  )
}

export default RegisterButton