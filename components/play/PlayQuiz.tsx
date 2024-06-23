"use client";
import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query";
import Carousel from "./Carousel"
import { toast } from "sonner";
import { playAction } from "@/utils/play/playAction";
import Loading from "../Loading";
import { useEffect, useState } from "react";
import { findOneAction } from "@/utils/play/findOneAction";
import { playQuizResponse } from "@/utils/definition";
import PlayQuestionForm from "./PlayQuestionForm";
import { useRouter } from "next/navigation";

const queryClient = new QueryClient();

const PlayQuiz = (props: {id: string}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Form id={props.id}/>
    </QueryClientProvider>
  )
}

export default PlayQuiz

const Form = ({id}: {id: string}) => {

  const [quizData, setQuizData] = useState<playQuizResponse>();

  const{mutate: server_playAction, isPending} = useMutation({
    mutationFn: playAction.bind(null, id),
    onSuccess: () => {
      notify("success");
    },
    onError: (e) => {
      notify(e.message);
    }
  })

  const{mutate: server_findOneAction, isPending: isPendingFind} = useMutation({
    mutationFn: findOneAction,
    onSuccess: (data: playQuizResponse) => {
      setQuizData(data);
    },
    onError: (e) => {
      notify(e.message);
    }
  })

  const notify = (message: string) => {
    toast(message);
  };

  useEffect(() => {
    server_findOneAction(id);
  }, []);

  return (
    <>
      {(isPending || isPendingFind) && <Loading/>}
      <form action={(formData: FormData) => server_playAction(formData)}>
        <Carousel length={(quizData?.questions.length ?? 0) + 2}>
          <div className="w-full min-w-full h-[85vh] flex justify-center items-center">
            <div className="w-3/4 mx-auto flex flex-col gap-4 sm:gap-12 justify-center items-center ">
              <div className="sm:text-2xl text-lg text-center">
                <span><strong>Quiz: </strong></span>
                {
                  quizData?.name
                }
              </div>
              <div className="indent-4 rounded-lg bg-slate-400 p-2">
                {
                  quizData?.description
                }
              </div>
            </div>
          </div>
          {
            quizData?.questions.map((question, index) => {
              return (
                <PlayQuestionForm question={question} no={index + 1} />
              )
            })
          }
          <div className="w-full min-w-full h-[85vh] flex justify-center items-center">
            <div className="w-3/4 mx-auto flex flex-col gap-4 sm:gap-12 justify-center items-center ">
              <div className="sm:text-2xl text-lg text-center">
                <span><strong>Quiz: </strong></span>
                {
                  quizData?.name
                }
              </div>
              <div className="rounded-lg bg-slate-400 p-2">
                This Quiz is Conclude with 
                <strong className="px-1 text-cyan-400">{quizData?.questions.length}</strong>
                questions
              </div>
              <button
                type="submit"
                className="flex w-24 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </div>
        </Carousel>
      </form>
      
    </>
  )
}