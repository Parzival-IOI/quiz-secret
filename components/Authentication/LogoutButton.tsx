'use client'

import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import Loading from "../Loading";
import { logout } from "@/utils/actions/auth";

const queryClient = new QueryClient();

const LogoutButton = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Button/>
    </QueryClientProvider>
    
  )
}

export default LogoutButton;

const Button = () => {
  const{mutate: server_logout, isPending} = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      notify("Success");
    },
    onError: (e: any) => {
      notify(e.message);
    }
  })

  const notify = (message: string) => {
    toast(message);
  };
  return (
    <>
      <ToastContainer
                autoClose={500}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                theme="dark"
              />
      {isPending && <Loading/>}
      <div>
          <button type="button" onClick={() => {server_logout()}} className=" text-slate-100 px-1 py-1 before:w-0 hover:before:w-full relative transition-all duration-300 before:content-[''] before:transition-all before:absolute before:bottom-0 before:left-0 before:rounded-md before:h-[8%] before:dark:bg-white before:bg-blue-300" >Sign out</button>
      </div>
    </>
  )
}