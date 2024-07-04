"use server";

import { customFetch } from "@/libs/customFetch";

export const deleteQuizAction = async (id: string) => {
  try {
    const url = process.env.API + "api/quiz/delete/" + id;
    const res = await customFetch(url, "DELETE", null)
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


export const deleteQuestion = async (id: string) => {
  try {
    const url = process.env.API + "api/question/delete/" + id;
    const res = await customFetch(url, "DELETE", null)
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

export const deleteAnswer = async (id: string) => {
  try {
    const url = process.env.API + "api/answer/delete/" + id;
    const res = await customFetch(url, "DELETE", null)
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
