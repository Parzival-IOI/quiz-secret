"use server";

import { customFetch } from "../customFetch";
import { order, orderByQuiz, pageSize } from "../data";

export const fetchInfiniteScroll = async ({page, search} : {page: number, search: string}) => {
  try {
    const url = new URL(process.env.API + "api/quiz/findAll");
    url.searchParams.append("search", search);
    url.searchParams.append("orderBy", orderByQuiz.DATE);
    url.searchParams.append("order", order.DESC);
    url.searchParams.append("page", page.toString());
    url.searchParams.append("size", pageSize.TEN);

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