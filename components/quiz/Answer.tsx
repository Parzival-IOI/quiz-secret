"use client";
import { isCorrect } from "@/utils/data";
import { Field, Label, Select, Switch } from "@headlessui/react";
import { Cross } from "../Icon";
import { useState } from "react";


const Answer = (props: {id: number, QId: number, data: {answer: string, isCorrect: boolean}, handleFormChangeAnswer: Function, removeAnswer: Function}) => {
  const [enabled, setEnabled] = useState(false)
  return (
    <div className="pt-4 px-3 bg-slate-700 rounded-xl mt-3 flex">
      
      <div className="w-full" >
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name={"questions.answers.answer"} id={"answer" + props.id} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
              defaultValue={props.data.answer}
              onChange={event => props.handleFormChangeAnswer(props.id, event, true)}
            />
          <label htmlFor={"answer" + props.id} className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Answer {props.id + 1}
          </label>
        </div>

        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input id={"correct" + props.id} type="checkbox" checked={enabled} onChange={() => setEnabled(e => !e)} className="w-6 aspect-square border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              name={"questions.answers.correct"}
            />
            {
              enabled === false &&
              <input id={"correct" + props.id} type="hidden" value={enabled.toString()} className="w-6 aspect-square border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                name={"questions.answers.correct"}
              />
            }
          </div>
          <label htmlFor={"correct" + props.id} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Is Correct
          </label>
        </div>
        
      </div>

      <div className="my-auto pl-4" >
        <button type="button" className="mt-2 p-1 rounded-lg bg-slate-600 hover:bg-slate-700" onClick={() => props.removeAnswer(props.id)}>{Cross()}</button>
      </div>

    </div>
  )
}

export default Answer;