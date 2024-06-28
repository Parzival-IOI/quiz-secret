import DataTable from "@/components/play/allRecord/DataTable"
import { fetchTable } from "@/utils/actions/listdata"
import { recordAllDataTable } from "@/utils/data"


const page = () => {
  return (
    <main className="mx-auto lg:w-full md:max-w-4xl h-[90vh]">
      <DataTable  fetchTable={fetchTable} api={recordAllDataTable}/>
    </main>
  )
}

export default page