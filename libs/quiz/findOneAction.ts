"use server";
import { quiz } from "@/libs/definition";
import { customFetch } from "../customFetch";

export const findOneAction = async (id: string): Promise<quiz|undefined> => {
  try {
    const url = process.env.API + "api/quiz/find/" + id;
    const res = await customFetch(url, "GET", null);
    if(res.ok) {
      const data: quiz  = await res.json();
      return data
    } else {
      throw new Error("Can't Get Quiz")
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}