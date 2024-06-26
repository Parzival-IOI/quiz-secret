"use client"
import Search from "@/components/Table/Search"
import Pagination from "@/components/Table/Pagination"
import { useEffect, useState } from "react"
import Order from "@/components/Table/Order"
import PageSize from "@/components/Table/PageSize"
import { orderByQuiz, order, pageSize } from "@/utils/data"
import { quizzesResponse, recordResponse, tableResponse } from "@/utils/definition"
import Content from "./Content"
import { toast } from 'sonner'
import CustomButton from "../CustomButton"

const DataTable = (props: {fetchTable: Function, api: string}) => {

  const [data, setData] = useState<quizzesResponse | null>(null);
  const [page, setPage] = useState<number>(0);
  const [column, setColumn] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [orderSort, setOrderSort] = useState<string>(order.ASC);
  const [size, setSize] = useState<string>(pageSize.TEN);

  const nextPage = (): void => {
    const sizePage = getPageSizeNum(size)
    setPage(e => {
      if(e >= Math.ceil(column/sizePage)-1) return e;
      return e+1;
    });
  }

  const previousPage = (): void => {
    setPage(e => {
      if(e <= 0) return e;
      return e-1;
    });
  }

  const firstPage = (): void => {
    setPage(0);
  }

  const lastPage = (): void => {
    const sizePage = getPageSizeNum(size)
    setPage(e => {
      if(e >= Math.ceil(column/sizePage)-1) return e;
      return Math.ceil(column/sizePage)-1;
    });
  }

  const pageZero = (): void => {
    setPage(0);
  }

  const searchPage = (val: string): void => {
    setSearch(val);
    setPage(0);
  }

  const pageSizeFunc = (val: string): void => {
    setSize(val);
    setPage(0);
  }

  const orderSortFunc = (val: string): void => {
    setOrderSort(val);
  }

  const getPageSizeNum = (size: string | undefined): number => {
    if(size == undefined) return 10;
    switch(size) {
      case "TEN":
        return 10;
      case "FIFTEEN":
        return 15
      case "TWENTY":
        return 20;
      default:
        return 10;
    }
  }

  useEffect(() => {
      loadData();
  }, [page, search, size, orderSort]);

  const loadData = async () => {
    try {
      const res: tableResponse<quizzesResponse>|null = await props.fetchTable({
        search: search,
        orderBy: orderByQuiz.DATE,
        order: orderSort,
        page: page,
        size: size,
      }, props.api);
      if(res != null) {
        notify("Reload");
        setData(res.data);
        setColumn(res.columns);
      }
    } catch (e) {
      console.log(e);
    }
  }

  const notify = (message: string) => {
    toast(message);
  };


  return (
    <div className="h-full w-full flex flex-col justify-between items-center">
      <div className="w-full flex justify-end px-4 py-2 gap-2 sm:gap-4">
        <PageSize pageSizeFunc={pageSizeFunc} sizePage={pageZero} />
        <Order orderSortFunc={orderSortFunc} />
        <Search searchPage={searchPage} />
        <CustomButton path="/quiz/create" label="Create"/>
      </div>

      <div className="w-full overflow-y-scroll overflow-x-hidden rounded-lg h-[80vh] px-1">
        <Content data={data} loadData={loadData}/>
      </div>

      <Pagination nextPage={nextPage} previousPage={previousPage} firstPage={firstPage} lastPage={lastPage} page={page}/>
    </div>
  )
}

export default DataTable