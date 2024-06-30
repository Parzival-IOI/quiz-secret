import { quizResponse } from "@/utils/definition"
import Link from "next/link"
import React from "react"
import { ArrowRight } from "../Icon"

const CardInfinite = React.forwardRef((props : {quiz: quizResponse, id: number}, ref:any) => {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"  ref={ref}>
        <div className="mb-2 max-h-16 text-ellipsis overflow-hidden text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-sans">{props.quiz.name}</div>
        <p className="mb-3 max-h-24 text-ellipsis overflow-hidden font-normal text-gray-700 dark:text-gray-400 font-sans">{props.quiz.description}</p>
        <Link href={"/play/" + props.quiz.id} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Play
            <ArrowRight />
        </Link>
    </div>
  )
})

export default CardInfinite