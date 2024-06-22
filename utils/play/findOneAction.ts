"use server";

import { promises } from "dns";
import { customFetch } from "../customFetch";
import { playQuizResponse } from "../definition";

export const findOneAction = async (id: string) => {
  try {
      const url = process.env.API + "api/play/quiz/" + id;
      const res = await customFetch(url, "GET", null)
      if(res.ok) {
        const data = await res.json();
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