"use client";

import { quiz } from "@/utils/definition";
import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query";
import Loading from "../Loading";
import { toast } from "sonner";
import Form from "./Form";
import { createQuizAction } from "@/utils/quiz/createAction";
const queryClient = new QueryClient();

const QuizCreate = (props: {data: quiz}) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FormData data={props.data}/>
      </QueryClientProvider>
    </>
  )
}

export default QuizCreate

const FormData = ({data} : {data: quiz}) => {
  
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
      <Form data={data} action={server_createQuiz} />
    </>
  )
}