import UserCreate from "@/components/user/UserCreate"
import { User } from "@/libs/definition"


const page = () => {

  const data : User = {
    id: "",
    name: "",
    email: "",
    role: "",
    createdAt: "",
    updatedAt: ""
  }

  return (
      <main className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <UserCreate data={data}/>
      </main>
  )
}

export default page