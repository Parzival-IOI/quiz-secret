"use client";

import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query";
import Loading from "../Loading";
import { toast } from "sonner";
import Form from "./Form";
import { createQuizAction } from "@/libs/quiz/createAction";
const queryClient = new QueryClient();

const QuizCreate = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FormData />
      </QueryClientProvider>
    </>
  )
}

export default QuizCreate

const FormData = () => {
  
  const{mutate: server_createQuiz, isPending} = useMutation({
    mutationFn: createQuizAction,
    onSuccess: () => {
      notify("Success");
    },
    onError: (e) => {
      notify(e.message);
    }
  })

  const notify = (message: string) => {
    toast(message);
  };


  return (
    <>
      {isPending && <Loading/>}
      <Form action={server_createQuiz} />
    </>
  )
}