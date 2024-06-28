import Link from "next/link"

const CustomButton = (props: {path: string, label: any}) => {
  return (
    <Link className="sm:px-2 sm:py-1 p-1 rounded-md text-white bg-slate-500 hover:bg-slate-700" href={props.path}>
      {
        props.label
      }
    </Link>
  )
}

export default CustomButton