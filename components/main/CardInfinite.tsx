import { quizResponse } from "@/utils/definition"
import Link from "next/link"
import React from "react"

const CardInfinite = React.forwardRef((props : {quiz: quizResponse}, ref:any) => {
  return (
    <div className="w-full h-48 bg-slate-500 rounded-md p-6" ref={ref} >
      {props.quiz.name}
      &nbsp;
      <Link href={"/play/" + props.quiz.id} >Play</Link>
    </div>
  )
})

export default CardInfinite