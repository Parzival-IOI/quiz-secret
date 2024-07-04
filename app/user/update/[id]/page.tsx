import UserUpdate from "@/components/user/UserUpdate";
import { User } from "@/libs/definition";
import { findOneAction } from "@/libs/user/findOne"
import { notFound } from "next/navigation";

const page = async ({ params }: { params: { id: string } }) => {

  const getData = async () => {
    try {
      const data: User = await findOneAction(params.id);
      if(!data) notFound();
      return data;
    } catch (e){
      notFound();
    }
  }

  const data = await getData();

  return (
    <main className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <UserUpdate data={data} id={params.id}/>
    </main>
  )
}

export default page

