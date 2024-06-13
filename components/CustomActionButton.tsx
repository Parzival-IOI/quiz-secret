import Link from "next/link"

const CustomActionButton = (props: {path: string, label: any}) => {
  return (
    <Link className="px-2 py-2 rounded-md bg-slate-500 hover:bg-slate-700" href={props.path}>
      {
        props.label
      }
    </Link>
  )
}

export default CustomActionButton