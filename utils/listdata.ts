'use server'

import { cookies } from "next/headers";
import { order, orderByQuiz, pageSize } from "./data";
import { dataTable } from "./definition";

export async function fetchTable(data: dataTable) {
  'use server';

  try {
    const url = new URL(process.env.API + "api/quiz/findAll");
    url.searchParams.append("search", data.search);
    url.searchParams.append("orderBy", data.orderBy);
    url.searchParams.append("order", data.order);
    url.searchParams.append("page", data.page);
    url.searchParams.append("size", data.size);

    const res = await fetch(url.href, {
      method: "GET",
      headers: {
        Authorization : "Bearer " + cookies().get("quiz-session")?.value,
      }
    })
    if(res.ok) {
      const quiz = await res.json()
      console.log(quiz, data);
      return quiz;
    }
  } catch (error) {
    console.log(error);
  }
}