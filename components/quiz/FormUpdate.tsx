"use client"
import React, { useCallback, useEffect, useState } from 'react'
import Question from './Question'
import { visibility } from '@/utils/data'
import { useRouter } from 'next/navigation'
import { question, quiz } from '@/utils/definition'
import { Field, Label, Select } from '@headlessui/react'
import QuestionUpdate from './QuestionUpdate'

const FormUpdate = (props: {action: Function, quiz: quiz | undefined}) => {

  const [question, setQuestion] = useState<question[] | undefined>([])

  const router = useRouter();

  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  const handleFormChangeQuestion = (index: number, event: React.ChangeEvent<HTMLInputElement>, isQuestion: boolean) => {
    // let data = [...question];
    // if(isQuestion) {
    //   data[index]["question"] = event.target.value;
    // } else {
    //   data[index]["type"] = event.target.value;

    // }
    // setQuestion(data);
  }

  const addQuestion = () => {
    // setQuestion([...question, newQuestion])
  }

  const removeQuestion = (index: number) => {
    // const questions = [...question];
    // questions.splice(index, 1)
    // setQuestion(questions)
  }

  useEffect(() => {
    setQuestion(props.quiz?.questions);

    console.log(props.quiz)
  }, [])

  return (
    <>
      <div className="w-16 mb-8 ">
        <button type="button" onClick={() => goBack()} className="sm:px-2 sm:py-1 p-1 rounded-md text-white bg-slate-500 hover:bg-slate-700">
          Back
        </button>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        <form className="space-y-6" action={(formData: FormData) => props.action(formData)} >

          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="name" id="name" className="block disabled:text-slate-500 py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
              defaultValue={props.quiz?.name}
              disabled={true}
              />
            <label htmlFor="name" className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Quiz Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <textarea name="description" id="description" className="block disabled:text-slate-500 py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
              defaultValue={props.quiz?.description}
              disabled={true}
              ></textarea>
            <label htmlFor="description" className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Description
            </label>
          </div>

          <Field>
              <Label htmlFor={"visibility"} className="block text-sm font-medium leading-6 ">{"visibility"}</Label>
              <div className="mt-2">
                  <Select name={"visibility"} id={"visibility"} disabled={true} defaultValue={props.quiz?.visibility}  className="block disabled:text-slate-500 w-full h-10 rounded-md border-0 dark:bg-slate-600 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                      {
                          visibility.map((item, index) => {
                              return (
                                  <option value={item.value} key={index} className="w-full h-16 font-sans font-semibold" >{item.label}</option>
                              )
                          })
                      }
                  </Select>
              </div>
          </Field>

          {
            question?.map((data, index) => {
              console.log(data)
              return (
                <QuestionUpdate key={index} id={index} data={data} handleFormChangeQuestion={handleFormChangeQuestion} removeQuestion={removeQuestion}/>
              )
            })
          }

          <button type="button" className="mt-4 px-2 py-1 rounded-md dark:bg-slate-500 bg-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-700" onClick={addQuestion}>Add Question</button>

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

export default FormUpdate