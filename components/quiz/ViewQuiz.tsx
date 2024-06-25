"use client";

import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import { findOneAction } from "@/utils/quiz/findOneAction";
import { quiz } from "@/utils/definition";
import { Check } from "../Icon";

const queryClient = new QueryClient();

const ViewQuiz = ({id}: { id: string}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <View id={id} />
    </QueryClientProvider>
  )
}

export default ViewQuiz


const View = ({id} : {id: string}) => {

  const [quizData, setQuizData] = useState<quiz | undefined>();

  const{mutate: server_viewQuizAction, isPending} = useMutation({
    mutationFn: findOneAction,
    onSuccess: (data) => {
      setQuizData(data)
      toast("success");
    },
    onError: (e) => {
      toast(e.message);
    }
  })

  useEffect(() => {
     server_viewQuizAction(id)
  }, []);

  return (
    <>
      {isPending && <Loading /> }
      <div className="h-full w-full flex flex-col justify-between items-center mb-4">
        <div className="w-3/4 mt-4 mx-auto flex flex-col gap-4 sm:gap-12 justify-center items-center ">
          <div className="sm:text-2xl text-lg text-center">
            <span><strong>Quiz: </strong></span>
            {
              quizData?.name
            }
            &nbsp;(
            {
              quizData?.visibility
            }
            )
          </div>
          <div className="indent-4 rounded-lg bg-slate-400 p-2">
            {
              quizData?.description
            }
          </div>
        </div>
      </div>
      <div className="mb-12 sm:px-2 px-4">
      {
        quizData?.questions.map((item, index) => {
          return (
            <>
              <div className=" pb-4 pt-8">
                <span className="px-2">{index + 1}.</span>
                {
                  item.question
                }
              </div>
              <input type="hidden" name="question" />
              <div className="flex justify-start items-center flex-wrap gap-2 pl-8 sm:gap-4 w-3/4">
                {
                  item.answers.map((answer, index) => {
                    return (
                      <div key={index} className="flex items-center gap-2">
                        <div
                          className={`group relative flex cursor-pointer rounded-lg bg-white/5 py-4 px-5 dark:text-white text-black shadow-lg ${answer.correct ? "outline-1 outline-white bg-white/40" : "outline-none"}`}
                        >
                          <div className="flex w-full items-center justify-between gap-2 sm:gap-4">
                            <div className="text-sm/6">
                              <div className="font-semibold">
                                <span className="px-2">{String.fromCharCode(97 + index)}.</span>
                                {answer.answer}
                              </div>
                            </div>
                            { answer.correct && <Check className="text-green-500" />}
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </>
          )
        })
      }
      </div>
    </>
  )
}