import DataTable from "@/components/myQuiz/DataTable"
import { fetchTable } from "@/utils/actions/listdata"
import { myQuizDataTable } from "@/utils/data"


const page = () => {
  return (
    <main className="mx-auto lg:w-full md:max-w-4xl h-[90vh]">
      <DataTable fetchTable={fetchTable} api={myQuizDataTable}/>
    </main>
  )
}

export default page