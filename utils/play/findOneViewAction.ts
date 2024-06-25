"use server";

import { customFetch } from "../customFetch";
import { playFindOneViewResposne } from "../definition";

export const findOneViewAction = async (id: string): Promise<playFindOneViewResposne | undefined> => {
  try {
      const url = process.env.API + "api/play/find/" + id;
      const res = await customFetch(url, "GET", null)
      if(res.ok) {
        const data: playFindOneViewResposne = await res.json();
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