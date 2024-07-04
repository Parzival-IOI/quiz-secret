import DataTable from "@/components/play/playerRecord/DataTable"
import { fetchTable } from "@/libs/actions/listdata"
import { recordDataTable } from "@/libs/data"


const page = () => {
  return (
    <main className="mx-auto lg:w-full md:max-w-4xl h-[90vh]">
      <DataTable  fetchTable={fetchTable} api={recordDataTable}/>
    </main>
  )
}

export default page