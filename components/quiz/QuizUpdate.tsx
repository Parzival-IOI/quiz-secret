"use client";

import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query";
import Loading from "../Loading";
import { toast } from "sonner";
import Form from "./Form";
import { findOneAction } from "@/utils/quiz/findOneAction";
import { quiz } from "@/utils/definition";
import { useEffect, useState } from "react";
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
  
  const{mutate: server_createQuiz, isPending} = useMutation({
    mutationFn: findOneAction,
    onSuccess: (data: quiz | undefined) => {
      setQuiz(data);
    },
    onError: (e) => {
      toast(e.message);
    }
  })

  useEffect(() => {
    findOneAction(id);
  }, []);

  return (
    <>
      {isPending && <Loading/>}
      <Form action={server_createQuiz} />
    </>
  )
}