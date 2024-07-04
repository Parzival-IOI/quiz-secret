"use client";
import Answer from "./Answer";
import { Cross } from "../Icon";

const Question = (props: {id: number, handleFormChangeQuestion: Function, removeQuestion: Function,
  data: {question: string, type: string, answers: {answer: string, isCorrect: boolean}[]}
  ,handleFormChangeAnswer: Function, removeAnswer: Function, addAnswer: Function
}) => {

  return (
    <>
      <div className="pt-2 pb-6 px-4 dark:bg-slate-800 bg-slate-200 rounded-xl mt-8">
        <div className="w-full flex justify-end" >
          <button type="button" className="mt-2 p-1 rounded-lg dark:bg-slate-600 dark:hover:bg-slate-700 hover:bg-slate-300/50 text-slate-400" onClick={() => props.removeQuestion(props.id)}>{Cross()}</button>
        </div>
        

        <div className="relative z-0 w-full mb-5 group">
          <textarea name="questions.question" id={"question" + props.id} className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
              onChange={event => props.handleFormChangeQuestion(props.id, event, true)}
              value={props.data.question}
              rows={2}

            ></textarea>
          <label htmlFor="description" className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Question {props.id + 1}
          </label>
        </div>

        <div>
          <label htmlFor="username" className="block text-sm font-medium leading-6 ">
            Type
          </label>
          <div className="mt-2">
            <input
              id={"type" + props.id}
              name={"questions.type"}
              type="text"
              onChange={event => props.handleFormChangeQuestion(props.id, event, false)}
              value={props.data.type}
              required
              className="block w-full h-10 rounded-md border-0 dark:bg-slate-600 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {
          props.data.answers.map((data, index) => {
            return (
              <Answer key={index} id={index} QId={props.id} data={data} handleFormChangeAnswer={props.handleFormChangeAnswer} removeAnswer={props.removeAnswer} />
            )
          })
        }

        <button type="button" onClick={() => props.addAnswer(props.id)} className="mt-4 px-2 py-1 rounded-md dark:bg-slate-500 bg-slate-300 hover:bg-slate-300/50 dark:hover:bg-slate-700" >Add Answer</button>

      </div>
    </>
  )
}

export default Question;