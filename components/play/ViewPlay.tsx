"use client";

import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useCallback, useEffect, useState } from "react";
import Loading from "../Loading";
import { playFindOneViewResposne, quiz } from "@/utils/definition";
import { Check, Wrong } from "../Icon";
import { useRouter } from "next/navigation";
import { findOneViewAction } from "@/utils/play/findOneViewAction";
import Answer from "../quiz/Answer";

const queryClient = new QueryClient();

const ViewPlay = ({id}: { id: string}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <View id={id} />
    </QueryClientProvider>
  )
}

export default ViewPlay


const View = ({id} : {id: string}) => {

  const [quizData, setQuizData] = useState<playFindOneViewResposne | undefined>();

  const router = useRouter();

  const goBack = useCallback(() => {
    router.back();
  }, [router]);


  const{mutate: server_viewQuizAction, isPending} = useMutation({
    mutationFn: findOneViewAction,
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
      <div className="w-16 mb-8 ">
        <button type="button" onClick={() => goBack()} className="px-2 mx-6 mt-12 lg:mx-8 py-1 rounded-md bg-slate-500 hover:bg-slate-700">
          Back
        </button>
      </div>
      <div className="mx-auto lg:w-full md:max-w-3xl">
        {isPending && <Loading /> }
        <div className="h-full w-full flex flex-col justify-between items-center mb-4">
          <div className="w-3/4 mt-4 mx-auto flex flex-col gap-4 sm:gap-12 justify-center items-center ">
            <div className="sm:text-2xl text-lg text-center">
              <span><strong>Quiz: </strong></span>
              {
                quizData?.quizName
              }
            </div>
            <div className="indent-4 rounded-lg bg-slate-400 p-2">
              {
                quizData?.quizDescription
              }
            </div>
          </div>
        </div>
        <div className="mb-12 sm:px-2 px-4">
        {
          quizData?.answered.map((item, index) => {
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
                            className={`group relative flex cursor-pointer rounded-lg bg-white/5 py-4 px-5 dark:text-white text-black shadow-lg ${answer.pick ? "outline-1 outline-white bg-white/40" : "outline-none"}`}
                          >
                            <div className="flex w-full items-center justify-between gap-2 sm:gap-4">
                              <div className="text-sm/6 font-semibold flex">
                                <span className="px-2">{String.fromCharCode(97 + index)}.</span>
                                <span className="">
                                  {answer.answer}
                                </span>
                              </div>
                              { (answer.pick == true && answer.correct == true)  && <Check className="text-green-500" />}
                              { (answer.pick == true && answer.correct == false)  && <Wrong className="text-red-500" />}
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
      </div>
      
    </>
  )
}