import { quizResponse } from "@/utils/definition"
import CustomButton from "../CustomButton"
import CustomActionButton from "../CustomActionButton"
import Link from "next/link"

const CardInfinite = ({quiz} : {quiz: quizResponse}) => {
  return (
    <div className="w-full h-48 bg-slate-500 rounded-md p-6">
      {quiz.name}
      &nbsp;
      <Link href={"/play/" + quiz.id} >Play</Link>
    </div>
  )
}

export default CardInfinite