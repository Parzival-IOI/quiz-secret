import DataTable from "@/components/play/allRecord/DataTable"
import { fetchTable } from "@/libs/actions/listdata"
import { recordAllDataTable } from "@/libs/data"


const page = () => {
  return (
    <main className="mx-auto lg:w-full md:max-w-4xl h-[90vh]">
      <DataTable  fetchTable={fetchTable} api={recordAllDataTable}/>
    </main>
  )
}

export default page