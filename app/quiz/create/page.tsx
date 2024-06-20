"use client"
import CustomButton from "@/components/CustomButton"
import { Cross } from "@/components/Icon";
import Selection from "@/components/Selection"
import { isCorrect, visibility } from "@/utils/data"
import { createQuiz } from "@/utils/quiz/createAction";
import { Field, Label, Select } from "@headlessui/react";
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

  const [question, setQuestion] = useState([
    {question: "", type: ""}
  ])

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
          Create User
        </button>
      </div>
    </form>
  )
}

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
            <input
              id={"question" + props.id}
              name="questions[].question"
              type="text"
              value={props.data.question}
              onChange={event => props.handleFormChangeQuestion(props.id, event, true)}
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
              <Answer key={index} id={index} data={data} handleFormChangeAnswer={handleFormChangeAnswer} removeAnswer={removeAnswer} />
            )
          })
        }

        <button type="button" onClick={addAnswer} className="mt-4 px-2 py-1 rounded-md bg-slate-500 hover:bg-slate-700" >Add Answer</button>

      </div>
    </>
  )
}

const Answer = (props: {id: number, data: {answer: string, isCorrect: boolean}, handleFormChangeAnswer: Function, removeAnswer: Function}) => {
  return (
    <div className="pt-2 pb-6 px-6 bg-slate-500 rounded-xl mt-8">
      <div className="w-full flex justify-end" >
        <button type="button" className="mt-2 p-1 rounded-lg bg-slate-600 hover:bg-slate-700" onClick={() => props.removeAnswer(props.id)}>{Cross()}</button>
      </div>
      <div>
        <label htmlFor="username" className="block text-sm font-medium leading-6 ">
          Answer {props.id + 1}
        </label>
        <div className="mt-2">
          <input
            id={"question" + props.id}
            name="answers[].answer"
            type="text"
            value={props.data.answer}
            onChange={event => props.handleFormChangeAnswer(props.id, event, true)}
            required
            className="block w-full h-10 rounded-md border-0 dark:bg-slate-600 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <Field>
        <Label htmlFor="correct" className="block text-sm font-medium leading-6 ">Is Correct</Label>
        <div className="mt-2">
              <Select name="correct" id="correct" onChange={event => props.handleFormChangeAnswer(props.id, event, false)} className="block w-full h-10 rounded-md border-0 dark:bg-slate-600 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  {
                      isCorrect.map((item, index) => {
                          let isSelected = false
                          if(props.data.isCorrect) {
                              isSelected = true;
                          }

                          return (
                              <option value={item.value} key={index} selected={isSelected} className="w-full h-16 font-sans font-semibold" >{item.label}</option>
                          )
                      })
                  }
              </Select>
          </div>
      </Field>

    </div>
  )
}