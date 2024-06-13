import UserUpdate from "@/components/user/UserUpdate";
import { User } from "@/utils/definition";
import { findOne } from "@/utils/user/findOne"
import { updateUser } from "@/utils/user/updateAction";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: { id: string } }) => {

  const data: User = await findOne(params.id);
  if(!data) {
    notFound();
  }

  return (
    <main className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <UserUpdate data={data} updateAction={updateUser} id={params.id}/>
    </main>
  )
}

export default page