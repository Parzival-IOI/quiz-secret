
"use client"
import LoginButton from '@/components/Authentication/LoginButton';
import Loading from '@/components/Loading';
import Selection from '@/components/Selection';
import { register } from '@/utils/actions/auth';
import { userRole } from '@/utils/data';
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

  const{mutate: server_register, isPending} = useMutation({
    mutationFn: register,
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
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 pt-12 lg:px-8">
            <LoginButton label={"Return to Sign in"}></LoginButton>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight">
              Sign up to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action={(formdata: FormData) => server_register(formdata)}>

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

              <Selection option={userRole} name={"role"} label={"Role"} selectedString=""></Selection>

              <div>
                <div className='h-6'></div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
  )
}