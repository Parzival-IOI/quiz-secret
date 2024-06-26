import Link from "next/link"

const CustomButton = (props: {path: string, label: string}) => {
  return (
    <Link className="px-2 py-1 rounded-md text-white bg-slate-500 hover:bg-slate-700" href={props.path}>
      {
        props.label
      }
    </Link>
  )
}

export default CustomButton