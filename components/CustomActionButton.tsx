import Link from "next/link"

const CustomActionButton = (props: {path: string, label: any}) => {
  return (
    <Link className="px-2 py-2 rounded-md dark:bg-slate-500 dark:hover:bg-slate-700 bg-slate-400 hover:bg-slate-300" href={props.path}>
      {
        props.label
      }
    </Link>
  )
}

export default CustomActionButton