"use client"
import CustomButton from "@/components/CustomButton"
import Selection from "@/components/Selection"
import { isCorrect, visibility } from "@/utils/data"
import { createQuiz } from "@/utils/quiz/createAction";
import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "sonner";
const queryClient = new QueryClient();
const page = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="w-16">
          <CustomButton path="/quiz" label="Back"/>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-lg">
          <QueryClientProvider client={queryClient}>
            <Form />
          </QueryClientProvider>
        </div>
      </div>
  )
}

export default page

const Form = () => {

  const{mutate: server_createQuiz, isPending} = useMutation({
    mutationFn: createQuiz,
    onSuccess: () => {
      toast.success("Success");
    },
    onError: (e: any) => {
      toast.error(e.message);
    }
  })


  return (
    <form className="space-y-6" action={(formData: FormData) => server_createQuiz(formData)}>
      <div>
        <label htmlFor="username" className="block text-sm font-medium leading-6 ">
          Quiz Name
        </label>
        <div className="mt-2">
          <input
            id="name"
            name="name"
            type="text"
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
            required
            className="block w-full h-10 rounded-md border-0 dark:bg-slate-600 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <Selection option={visibility} name={"visibility"} label={"Visibility"} selectedString="PUBLIC" ></Selection>

      <Question id="1"></Question>
      {/* <Question id="2"></Question>
      <Question id="3"></Question> */}

      <div>
        <div className='h-6'></div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create User
        </button>
      </div>
    </form>
  )
}

const Question = (props: {id: string}) => {
  return (
    <div className="pt-2 pb-6 px-6 bg-slate-400 rounded-xl mt-8">
      <div>
        <label htmlFor="username" className="block text-sm font-medium leading-6 ">
          Question
        </label>
        <div className="mt-2">
          <input
            id={"question" + props.id}
            name="questions[].question"
            type="text"
            required
            className="block w-full h-10 rounded-md border-0 dark:bg-slate-600 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <label htmlFor="username" className="block text-sm font-medium leading-6 ">
          Type
        </label>
        <div className="mt-2">
          <input
            id={"type" + props.id}
            name="questions[].type"
            type="text"
            required
            className="block w-full h-10 rounded-md border-0 dark:bg-slate-600 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <Answer id={"1"}/>

    </div>
  )
}

const Answer = (props: {id: string}) => {
  return (
    <div className="pt-2 pb-6 px-6 bg-slate-500 rounded-xl mt-8">
      <div>
        <label htmlFor="username" className="block text-sm font-medium leading-6 ">
          Question {props.id}
        </label>
        <div className="mt-2">
          <input
            id={"question" + props.id}
            name="answers[].answer"
            type="text"
            required
            className="block w-full h-10 rounded-md border-0 dark:bg-slate-600 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <Selection option={isCorrect} name={"correct"} label={"Is Correct"} selectedString="TRUE" ></Selection>

    </div>
  )
}