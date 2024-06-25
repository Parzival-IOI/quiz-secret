import DataTable from "@/components/user/DataTable"
import { fetchTable } from "@/utils/actions/listdata"
import { userDataTable } from "@/utils/data"

const page = () => {
  return (
    <main className="mx-auto lg:w-full md:max-w-4xl h-[90vh]">
      <DataTable fetchTable={fetchTable} api={userDataTable}></DataTable>
    </main>
  )
}

export default page