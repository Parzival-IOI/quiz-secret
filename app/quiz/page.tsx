import DataTable from "@/components/quiz/DataTable"
import { fetchTable } from "@/libs/actions/listdata"
import { quizDataTable } from "@/libs/data"

const page = () => {
  return (
    <main className="mx-auto lg:w-full md:max-w-4xl h-[90vh]">
      <DataTable fetchTable={fetchTable} api={quizDataTable}></DataTable>
    </main>
  )
}

export default page