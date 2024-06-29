"use client";

import { User } from "@/utils/definition";
import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query";
import Loading from "../Loading";
import { toast } from "sonner";
import Form from "./Form";
import { createUserAction } from "@/utils/user/createAction";
const queryClient = new QueryClient();

const UserCreate = (props: {data: User}) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FormData data={props.data}/>
      </QueryClientProvider>
    </>
  )
}

export default UserCreate

const FormData = ({data} : {data: User}) => {
  
  const{mutate: server_createUser, isPending} = useMutation({
    mutationFn: createUserAction,
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
      <Form data={data} action={server_createUser} buttonName="Create User" />
    </>
  )
}