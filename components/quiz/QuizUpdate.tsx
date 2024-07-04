"use client";

import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query";
import Loading from "../Loading";
import { toast } from "sonner";
import { findOneAction } from "@/libs/quiz/findOneAction";
import { quiz } from "@/libs/definition";
import { useEffect, useState } from "react";
import FormUpdate from "./FormUpdate";
import { updateQuiz } from "@/libs/quiz/updateQuizAction";
const queryClient = new QueryClient();

const QuizUpdate = ({id}: {id: string}) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FormData id={id} />
      </QueryClientProvider>
    </>
  )
}

export default QuizUpdate

const FormData = ({id} : {id: string}) => {

  const [quiz, setQuiz] = useState<quiz | undefined>(); 
  
  const{mutate: server_findOne, isPending: pendingFindOne} = useMutation({
    mutationFn: findOneAction.bind(null, id),
    onSuccess: (data: quiz | undefined) => {
      setQuiz(data);
    },
    onError: (e) => {
      toast.error(e.message);
    }
  })

  const{mutate: server_UpdateQuiz, isPending: pendingUpdate} = useMutation({
    mutationFn: updateQuiz.bind(null, id),
    onSuccess: () => {
      toast.success("success");
    },
    onError: (e) => {
      toast.error(e.message);
    }
  })

  useEffect(() => {

    server_findOne();

  }, []);

  if (pendingFindOne) {
    return <Loading/>;
  }

  return (
    <>
      {pendingUpdate && <Loading/>}
      <FormUpdate quiz={quiz} id={id} action={server_UpdateQuiz} />
    </>
  )
}