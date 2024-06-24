import DataTable from "@/components/play/playerRecord/DataTable"
import { fetchTable } from "@/utils/actions/listdata"
import { recordAllDataTable } from "@/utils/data"


const page = () => {
  return (
    <main className="mx-auto lg:w-full md:max-w-3xl h-[90vh]">
      <DataTable  fetchTable={fetchTable} api={recordAllDataTable}/>
    </main>
  )
}

export default page