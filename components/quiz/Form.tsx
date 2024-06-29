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

          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
                defaultValue={props.data.name}
              />
            <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Quiz Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <textarea name="description" id="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
                defaultValue={props.data.description}
              ></textarea>
            <label htmlFor="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Description
            </label>
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