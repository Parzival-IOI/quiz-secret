"use client";
import { useState } from "react";
import Answer from "./Answer";
import { Cross } from "../Icon";

const Question = (props: {id: number, data: {question: string, type: string}, handleFormChangeQuestion: Function, removeQuestion: Function}) => {

  const [answer, setAnswer] = useState([
    {answer: "", isCorrect: false}
  ])

  const handleFormChangeAnswer = (index: number, event: React.ChangeEvent<HTMLInputElement>, isAnswer: boolean) => {
    let data = [...answer];
    if(isAnswer) {
      data[index]["answer"] = event.target.value;
    } else {
      const isCorrect = event.target.value
      if(isCorrect == "TRUE") {
        data[index]["isCorrect"] = true;
      }
      else {
        data[index]["isCorrect"] = false;
      }
    }
    setAnswer(data);
  }

  const addAnswer = () => {
    const newAnswer = {answer: "", isCorrect: false};
    setAnswer([...answer, newAnswer])
  }

  const removeAnswer = (index: number) => {
    const answers = [...answer];
    answers.splice(index, 1)
    setAnswer(answers)
  }

  return (
    <>
      <div className="pt-2 pb-6 px-4 bg-slate-800 rounded-xl mt-8">
        <div className="w-full flex justify-end" >
          <button type="button" className="mt-2 p-1 rounded-lg bg-slate-600 hover:bg-slate-700" onClick={() => props.removeQuestion(props.id)}>{Cross()}</button>
        </div>
        

        <div className="relative z-0 w-full mb-5 group">
          <textarea name="questions.question" id={"question" + props.id} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
              defaultValue={props.data.question}
              onChange={event => props.handleFormChangeQuestion(props.id, event, true)}
              rows={2}

            ></textarea>
          <label htmlFor="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
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
              value={props.data.type}
              onChange={event => props.handleFormChangeQuestion(props.id, event, false)}
              required
              className="block w-full h-10 rounded-md border-0 dark:bg-slate-600 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {
          answer.map((data, index) => {
            return (
              <Answer key={index} id={index} QId={props.id} data={data} handleFormChangeAnswer={handleFormChangeAnswer} removeAnswer={removeAnswer} />
            )
          })
        }

        <button type="button" onClick={addAnswer} className="mt-4 px-2 py-1 rounded-md bg-slate-500 hover:bg-slate-700" >Add Answer</button>

      </div>
    </>
  )
}

export default Question;