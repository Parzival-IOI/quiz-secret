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
      <div className="pt-2 pb-6 px-6 bg-slate-400 rounded-xl mt-8">
        <div>
          <div className="w-full flex justify-end" >
            <button type="button" className="mt-2 p-1 rounded-lg bg-slate-600 hover:bg-slate-700" onClick={() => props.removeQuestion(props.id)}>{Cross()}</button>
          </div>
          <label htmlFor="username" className="block text-sm font-medium leading-6 ">
            Question {props.id + 1}
          </label>
          <div className="mt-2">
            <textarea
              id={"question" + props.id}
              name={"questions.question"}
              value={props.data.question}
              onChange={event => props.handleFormChangeQuestion(props.id, event, true)}
              required
              rows={2}
              className="block w-full rounded-md border-0 dark:bg-slate-600 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
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