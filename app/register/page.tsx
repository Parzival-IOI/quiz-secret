
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

              <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-base bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Email
                </label>
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="username" id="username" className="block py-2.5 px-0 w-full text-base bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="username" className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Username
                </label>
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-base bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="password" className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Password
                </label>
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