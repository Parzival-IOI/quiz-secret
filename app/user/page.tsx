import DataTable from "@/components/user/DataTable"
import { fetchTable } from "@/libs/actions/listdata"
import { userDataTable } from "@/libs/data"

const page = () => {
  return (
    <main className="mx-auto lg:w-full md:max-w-4xl h-[90vh]">
      <DataTable fetchTable={fetchTable} api={userDataTable}></DataTable>
    </main>
  )
}

export default page