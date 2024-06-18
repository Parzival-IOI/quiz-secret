"use client";

import CustomButton from "@/components/CustomButton";
import Selection from "@/components/Selection";
import { adminRole } from "@/utils/data";
import { User } from "@/utils/definition";
import { updateUser } from "@/utils/user/updateAction";
import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query";
import Loading from "../Loading";
import { toast } from "sonner";
const queryClient = new QueryClient();
const UserUpdate = (props: {data: User, id: string}) => {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Form data={props.data} id={props.id}/>
    </QueryClientProvider>
      
    </>
  )
}

export default UserUpdate

const Form = ({data, id} : {data: User, id: string}) => {
  
  const{mutate: server_updateUser, isPending} = useMutation({
    mutationFn: updateUser.bind(null, id),
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
        <div className="w-16">
          <CustomButton path="/user" label="Back"/>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action={(formdata: FormData) => server_updateUser(formdata)}>
          <div>
              <div className="flex items-center justify-between">
                <label htmlFor="email" className="block text-sm font-medium leading-6 ">
                  Email
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  defaultValue={data.email}
                  required
                  placeholder='Example@gmail.com'
                  className="block w-full h-10 rounded-md border-0 dark:bg-slate-600 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 ">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="name"
                  autoComplete="username"
                  defaultValue={data.name}
                  required
                  placeholder='Ex : Parzival'
                  className="block w-full h-10 rounded-md border-0 dark:bg-slate-600 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 ">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full h-10 rounded-md border-0 dark:bg-slate-600 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <Selection option={adminRole} name={"role"} label={"Role"} selectedString={data.role}></Selection>

            <div>
              <div className='h-6'></div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update User
              </button>
            </div>
          </form>
        </div>
      </>
  )
}