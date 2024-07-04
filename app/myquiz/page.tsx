import DataTable from "@/components/myQuiz/DataTable"
import { fetchTable } from "@/libs/actions/listdata"
import { myQuizDataTable } from "@/libs/data"


const page = () => {
  return (
    <main className="mx-auto lg:w-full md:max-w-4xl h-[90vh]">
      <DataTable fetchTable={fetchTable} api={myQuizDataTable}/>
    </main>
  )
}

export default page