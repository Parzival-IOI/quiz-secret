import Search from "@/components/Search"
import Pagination from "@/components/Pagination"

const DataTable = () => {
  return (
    <div className="h-full w-full flex flex-col justify-between items-center">
        <div className="w-full flex justify-end pr-4 py-2">
            <Search/>
        </div>

        <div className="w-full overflow-y-scroll overflow-x-hidden">
            <table className="w-full h-[200vh] bg-blue-400">
            sdlkfjsd
            </table>
        </div>

        <Pagination></Pagination>
    </div>
  )
}

export default DataTable