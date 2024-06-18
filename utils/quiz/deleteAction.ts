"use server";

import { customFetch } from "@/utils/customFetch";

export const deleteQuiz = async (id: string) => {
  try {
    const url = process.env.API + "api/quiz/delete/" + id;
    const res = await customFetch(url, "DELETE",null)
    if(res.ok) {
      const data = await res.text();
      return data
    } else {
      console.log(res);
      throw new Error(await res.text())
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}