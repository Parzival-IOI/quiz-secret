"use client"
import { quiz } from '@/utils/definition'
import React, { useCallback, useState } from 'react'
import Question from './Question'
import Selection from '../Selection'
import { visibility } from '@/utils/data'
import { useRouter } from 'next/navigation'

const Form = (props: {action: Function, data: quiz}) => {

  const [question, setQuestion] = useState([
    {question: "", type: ""}
  ])

  const router = useRouter();

  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  const handleFormChangeQuestion = (index: number, event: React.ChangeEvent<HTMLInputElement>, isQuestion: boolean) => {
    let data = [...question];
    if(isQuestion) {
      data[index]["question"] = event.target.value;
    } else {
      data[index]["type"] = event.target.value;

    }
    setQuestion(data);
  }

  const addQuestion = () => {
    const newQuestion = {question: "", type: ""}
    setQuestion([...question, newQuestion])
  }

  const removeQuestion = (index: number) => {
    const questions = [...question];
    questions.splice(index, 1)
    setQuestion(questions)
  }

  return (
    <>
      <div className="w-16 mb-8 ">
        <button type="button" onClick={() => goBack()} className="px-2 py-1 rounded-md bg-slate-500 hover:bg-slate-700">
          Back
        </button>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        <form className="space-y-6" action={(formData: FormData) => props.action(formData)} >
          <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 ">
              Quiz Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                defaultValue={props.data.name}
                required
                className="block w-full h-10 rounded-md border-0 dark:bg-slate-600 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 ">
                Description
              </label>
            </div>
            <div className="mt-2">
              <textarea
                id="description"
                name="description"
                rows={3}
                defaultValue={props.data.description}
                required
                className="block w-full h-10 rounded-md border-0 dark:bg-slate-600 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <Selection option={visibility} name={"visibility"} label={"Visibility"} selectedString={props.data.visibility} ></Selection>

          {
            question.map((data, index) => {
              return (
                <Question key={index} id={index} data={data} handleFormChangeQuestion={handleFormChangeQuestion} removeQuestion={removeQuestion}/>
              )
            })
          }

          <button type="button" className="mt-4 px-2 py-1 rounded-md bg-slate-500 hover:bg-slate-700" onClick={addQuestion}>Add Question</button>

          <div>
            <div className='h-6'></div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create Quiz
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Form