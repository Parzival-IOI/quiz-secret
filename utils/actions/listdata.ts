'use server'

import { dataTable } from "@/utils/definition";
import { customFetch } from "@/utils/customFetch";

export async function fetchTable(data: dataTable, path: string) {
  try {
    const url = new URL(process.env.API + path);
    url.searchParams.append("search", data.search);
    url.searchParams.append("orderBy", data.orderBy);
    url.searchParams.append("order", data.order);
    url.searchParams.append("page", data.page);
    url.searchParams.append("size", data.size);

    const res = await customFetch(url.href, "GET", null);
    if(res.ok) {
      const quiz = await res.json()
      return quiz;
    }
    else {
      throw new Error(res.status.toString());
    }
  } catch (error) {
    console.log(error);
    throw new Error("something went wrong");
  }
}
