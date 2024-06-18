"use client";
import RegisterButton from '@/components/Authentication/RegisterButton';
import Loading from '@/components/Loading';
import { login } from '@/utils/actions/auth';
import { QueryClient, QueryClientProvider, useMutation } from '@tanstack/react-query';
import { toast } from 'sonner'

const queryClient = new QueryClient();

const page = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Form/>
    </QueryClientProvider>
  )
}

export default page

function Form() {

  const{mutate: server_login, isPending} = useMutation({
    mutationFn: login,
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
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-20">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            Sign in to your account
          </h2>
        </div>
        

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action={(formdata: FormData) => server_login(formdata)}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 ">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  placeholder='Ex : Parzival'
                  className="block w-full rounded-md border-0 dark:bg-slate-600 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md border-0 dark:bg-slate-600 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className='h-6'></div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className='flex justify-end items-center mt-6'>
            Don't have an account yet? &nbsp;
            <RegisterButton label={"Sign up"} ></RegisterButton>
          </div>
        </div>
      </div></>
  )
}