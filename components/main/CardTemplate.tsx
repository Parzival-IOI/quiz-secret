import { quizResponse } from "@/utils/definition"
import Link from "next/link"
import { ArrowRight } from "../Icon"

const CardTemplate =() => {
  return (
    <div className="w-full p-6 animate-pulse bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="mb-2 max-h-16 text-ellipsis overflow-hidden text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-sans">
          <div className="w-full h-8 rounded-lg bg-slate-300" ></div>
        </div>
        <div className="my-3 max-h-24 space-y-2 text-ellipsis overflow-hidden font-normal text-gray-700 dark:text-gray-400 font-sans">
          <div className="w-full h-4 rounded-lg bg-slate-300" ></div>
          <div className="w-full h-4 rounded-lg bg-slate-300" ></div>
        </div>
        <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-900 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-800 dark:focus:ring-blue-800">
            Play
            <ArrowRight />
        </div>
    </div>
  )
}

export default CardTemplate