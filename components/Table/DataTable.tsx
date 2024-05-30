"use client"
import Search from "@/components/Table/Search"
import Pagination from "@/components/Table/Pagination"
import { useRef } from "react"
import Order from "@/components/Table/Order"
import PageSize from "@/components/Table/PageSize"

const DataTable = (props: {fetchTable: Function}) => {

  const searchElement = useRef<HTMLInputElement>(null);
  const orderElement = useRef<HTMLSelectElement>(null);
  const sizeElement = useRef<HTMLSelectElement>(null);

  const loadData = () => {
    console.log(searchElement.current?.value);
    console.log(orderElement.current?.value);
    console.log(sizeElement.current?.value);

    // props.fetchTable(searchElement.current?.value);
  }

  return (
    <div className="h-full w-full flex flex-col justify-between items-center">
        <div className="w-full flex justify-end px-4 py-2 gap-2 sm:gap-4">
            <PageSize loadData={loadData} ref={sizeElement}/>
            <Order loadData={loadData} ref={orderElement}/>
            <Search loadData={loadData} ref={searchElement}/>
        </div>

        <div className="w-full overflow-y-scroll overflow-x-hidden rounded-lg">
            <div className="bg-slate-800 h-[200vh]">

            </div>
        </div>

        <Pagination></Pagination>
    </div>
  )
}

export default DataTable