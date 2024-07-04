
import DataTable from "@/components/quiz/player/DataTable"
import { fetchTablePlayer } from "@/libs/actions/listdata"
import { quizPlayerDataTable } from "@/libs/data"


const page = ({ params }: { params: { id: string } }) => {
  return (
    <main className="mx-auto lg:w-full md:max-w-4xl h-[90vh]">
      <DataTable fetchTable={fetchTablePlayer} api={quizPlayerDataTable} id={params.id}/>
    </main>
  )
}

export default page