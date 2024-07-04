"use client"
import React, { useCallback, useState } from 'react'
import Selection from '../Selection'
import { visibility } from '@/libs/data'
import { useRouter } from 'next/navigation'
import { answer, question, quiz } from '@/libs/definition'
import QuestionUpdate from './QuestionUpdate'
import { useMutation } from '@tanstack/react-query'
import { deleteAnswer, deleteQuestion } from '@/libs/quiz/deleteAction'
import { toast } from 'sonner'

const FormUpdate = (props: {quiz: quiz|undefined, id: string, action: Function}) => {

  const [question, setQuestion] = useState<question[]>(props.quiz?.questions ? props.quiz?.questions : [])

  const router = useRouter();

  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  const{mutate: server_DeleteQuestion, isPending: pendingDeleteQuestion} = useMutation({
    mutationFn: deleteQuestion,
    onSuccess: () => {
      // toast.success("success");
    },
    onError: (e) => {
      toast.error(e.message);
    }
  })

  const{mutate: server_DeleteAnswer, isPending: pendingDeleteAnswer} = useMutation({
    mutationFn: deleteAnswer,
    onSuccess: () => {
      // toast.success("success");
    },
    onError: (e) => {
      toast.error(e.message);
    }
  })

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
    const newQuestion: question = {id: "newQuestion", question: "", type: "", createdAt: "", updatedAt: "", answers: [{id: "newAnswer", answer: "", correct: "false", createdAt: "", updatedAt: ""}]}
    setQuestion([...question, newQuestion])
  }

  const removeQuestion = (index: number) => {
    const questions = [...question];
    if(questions[index].id !== "newQuestion") {
      //delete the question
      server_DeleteQuestion(questions[index].id);
    }
    questions.splice(index, 1)
    setQuestion(questions)
  }

  const handleFormChangeAnswer = (index: number, answerIndex: number, event: React.ChangeEvent<HTMLInputElement>, isAnswer: boolean) => {
    let data = [...question[index].answers];
    if(isAnswer) {
      data[answerIndex]["answer"] = event.target.value;
    } else {
      const isCorrect = event.target.value
      if(isCorrect == "false") {
        data[answerIndex]["correct"] = "true";
      }
      else {
        data[answerIndex]["correct"] = "false";
      }
    }
    const temp = question;
    temp[index]["answers"] = [...data];

    setQuestion(temp.slice())
  }

  const addAnswer = (index: number) => {
    const newAnswer: answer = {id: "newAnswer", answer: "", correct: "false", createdAt: "", updatedAt: ""};
    const temp = question;
    temp[index].answers = [...temp[index].answers, newAnswer]

    setQuestion(temp.slice())
  }

  const removeAnswer = (index: number, answerIndex: number) => {
    const answers = [...question[index].answers];
    if(answers[answerIndex].id !== "newAnswer") {
      //delete answer
      server_DeleteAnswer(answers[answerIndex].id);
    }
    answers.splice(answerIndex, 1)
    const temp = question;
    temp[index].answers = [...answers];

    setQuestion(temp.slice())
  }

  return (
    <>
      {/* {(pendingDeleteQuestion || pendingDeleteAnswer) && <Loading />} */}
      <div className="w-16 mb-8 ">
        <button type="button" onClick={() => goBack()} className="sm:px-2 sm:py-1 p-1 rounded-md text-white bg-slate-500 hover:bg-slate-700">
          Back
        </button>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        <form className="space-y-6" action={(formData: FormData) => props.action(formData)} >

          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
              defaultValue={props.quiz?.name}
              />
            <label htmlFor="name" className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Quiz Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <textarea name="description" id="description" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
              defaultValue={props.quiz?.description}
              ></textarea>
            <label htmlFor="description" className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Description
            </label>
          </div>

          <Selection option={visibility} name={"visibility"} label={"Visibility"} selectedString={props.quiz?.visibility ? props.quiz?.visibility : ""} ></Selection>

          {
            question?.map((data, index) => {
              return (
                <QuestionUpdate key={index} id={index} 
                handleFormChangeQuestion={handleFormChangeQuestion} data={data} removeQuestion={removeQuestion} 
                handleFormChangeAnswer={handleFormChangeAnswer} removeAnswer={removeAnswer} addAnswer={addAnswer}  />
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
              Update Quiz
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default FormUpdate