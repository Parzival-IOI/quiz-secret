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
      const data = await res.json()
      return data;
    }
    else {
      throw new Error(await res.text());
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function fetchTablePlayer(data: dataTable, path: string, id: string) {
  try {
    const url = new URL(process.env.API + path);
    url.searchParams.append("search", data.search);
    url.searchParams.append("orderBy", data.orderBy);
    url.searchParams.append("order", data.order);
    url.searchParams.append("page", data.page);
    url.searchParams.append("size", data.size);
    url.searchParams.append("quizId", id);

    const res = await customFetch(url.href, "GET", null);
    if(res.ok) {
      const data = await res.json()
      return data;
    }
    else {
      throw new Error(await res.text());
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

