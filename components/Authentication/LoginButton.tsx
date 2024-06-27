import Link from "next/link";
import { ArrowLeft } from "@/components/Icon";

const LoginButton = (props: {label: string}) => {
  return (
    <div className="flex justify-start items-center gap-2">
        <ArrowLeft/>
        <Link href={"/login"}>{props.label}</Link>
    </div>
  )
}

export default LoginButton;