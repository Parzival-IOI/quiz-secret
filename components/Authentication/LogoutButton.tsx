'use client'

import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query";
import { Toaster, toast } from 'sonner'
import Loading from "../Loading";
import { logout } from "@/libs/actions/auth";

const queryClient1 = new QueryClient();

const LogoutButton = () => {
  return (
    <QueryClientProvider client={queryClient1}>
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
      {isPending && <Loading/>}
      <div>
          <button type="button" onClick={() => {server_logout()}} className="dark:text-white px-1 py-1 before:w-0 hover:before:w-full relative transition-all duration-300 before:content-[''] before:transition-all before:absolute before:bottom-0 before:left-0 before:rounded-md before:h-[8%] before:dark:bg-white before:bg-blue-900" >Sign out</button>
      </div>
    </>
  )
}