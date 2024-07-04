"use client";
import { answer } from "@/libs/definition";
import { Cross } from "../Icon";


const AnswerUpdate = (props: {id: number, QId: number, handleFormChangeAnswer: Function, removeAnswer: Function, data: answer}) => {
  
  return (
    <div className="px-3 dark:bg-slate-700 bg-slate-400 rounded-xl mt-3 flex items-center">
      
      <input type="hidden" name="answer.id" defaultValue={props.data.id} />

      <div className="w-full" >
        <div className="relative z-0 w-full mb-5 group mt-6">
          <textarea name={"questions.answers.answer"} id={"answer" + props.id} className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
              onChange={event => props.handleFormChangeAnswer(props.QId, props.id, event, true)}
              value={props.data.answer}
              rows={1}
            ></textarea>
          <label htmlFor={"answer" + props.id} className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Answer {props.id + 1}
          </label>
        </div>
        
      </div>
      <div className="flex items-center h-5 pl-4">
          <input id={"correct" + props.id} type="checkbox" value={props.data.correct} checked={JSON.parse(props.data.correct)} onChange={(e) => props.handleFormChangeAnswer(props.QId, props.id, e, false)} className="w-6 aspect-square border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 "
            name={"questions.answers.correct"}
          />
          {
            JSON.parse(props.data.correct) === false &&
            <input id={"correct" + props.id} type="hidden" value={props.data.correct} className="w-6 aspect-square border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              name={"questions.answers.correct"}
            />
          }
        </div>

      <div className="pl-4" >
        <button type="button" className="p-1 rounded-lg dark:bg-slate-600 dark:hover:bg-slate-500 hover:bg-slate-300/50 text-slate-200" onClick={() => props.removeAnswer(props.QId, props.id)}>{<Cross />}</button>
      </div>

    </div>
  )
}

export default AnswerUpdate;