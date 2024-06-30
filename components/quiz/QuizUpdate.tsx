"use client";

import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query";
import Loading from "../Loading";
import { toast } from "sonner";
import { findOneAction } from "@/utils/quiz/findOneAction";
import { quiz } from "@/utils/definition";
import { Suspense, useEffect, useState } from "react";
import FormUpdate from "./FormUpdate";
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
  
  const{mutate: server_updateQuiz, isPending} = useMutation({
    mutationFn: findOneAction,
    onSuccess: (data: quiz | undefined) => {
      
    },
    onError: (e) => {
      toast(e.message);
    }
  })

  const{data ,mutate: server_findOne, isPending: pendingFindOne} = useMutation({
    mutationFn: findOneAction,
    onSuccess: (data: quiz | undefined) => {
      setQuiz(data);
    },
    onError: (e) => {
      toast(e.message);
    }
  })

  useEffect(() => {

    server_findOne(id);

  }, []);

  return (
    <>
      {(isPending || pendingFindOne) && <Loading/>}
      <Suspense>
        <FormUpdate action={server_updateQuiz} quiz={quiz} />
      </Suspense>
      
    </>
  )
}