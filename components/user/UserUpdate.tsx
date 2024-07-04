"use client";

import { User } from "@/libs/definition";
import { updateUserAction } from "@/libs/user/updateAction";
import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query";
import Loading from "../Loading";
import { toast } from "sonner";
import Form from "./Form";
const queryClient = new QueryClient();
const UserUpdate = (props: {data: User, id: string}) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FormData data={props.data} id={props.id}/>
      </QueryClientProvider>
    </>
  )
}

export default UserUpdate

const FormData = ({data, id} : {data: User, id: string}) => {
  
  const{mutate: server_updateUser, isPending} = useMutation({
    mutationFn: updateUserAction.bind(null, id),
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
      <Form data={data} action={server_updateUser} buttonName="Update User" />
    </>
  )
}