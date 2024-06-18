"use server";

import { customFetch } from "@/utils/customFetch";

export const createQuiz = async (formData: FormData) => {
  console.log(formData)
  // try {
  //   const url = process.env.API + "api/quiz/create";
  //   const res = await customFetch(url, "DELETE",null)
  //   if(res.ok) {
  //     const data = await res.text();
  //     return data
  //   } else {
  //     console.log(res);
  //     throw new Error(await res.text())
  //   }
  // } catch (error) {
  //   console.log(error);
  //   throw error;
  // }
}