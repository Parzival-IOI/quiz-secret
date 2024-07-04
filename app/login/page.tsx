"use client";
import RegisterButton from '@/components/Authentication/RegisterButton';
import Loading from '@/components/Loading';
import LoginYeti from '@/components/LoginYeti';
import { login } from '@/libs/actions/auth';
import { QueryClient, QueryClientProvider, useMutation } from '@tanstack/react-query';
import { toast } from 'sonner'
import UseScript from '@/components/hook/useScript'

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

  UseScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js", false);
  UseScript("/script/morphSvg.js", true);
  UseScript("/script/yetiAnimation.js", true);

  const notify = (message: string) => { 
    toast(message);
  };
  return (
    <>
        {isPending && <Loading/>}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8 mt-8 sm:mt-20">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <LoginYeti />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action={(formdata: FormData) => server_login(formdata)}>
              <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="username" id="username" max="254" className="block py-2.5 px-0 w-full text-base bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="username" id="loginUsernameLabel" className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Username
                </label>
              </div>

              <div className="relative z-0 w-full mb-5 group inputGroup2">
                <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-base bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="password" id="loginPasswordLabel" className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Password
                </label>
                <label id="showPasswordToggle" htmlFor="showPasswordCheck" className='hidden'>
                  <input id="showPasswordCheck" type="hidden"/>
                  <div className="indicator"></div>
                </label>
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
        </div>
      </>
  )
}