import { User } from "@/utils/definition";
import { cookies } from "next/headers";

export const findOneAction = async (id: string) => {
  try {
    const url = process.env.API + "api/user/find/" + id;
    const res = await fetch(url, 
      {
        method: "GET",
        headers: {
          "Content-type" : "application/json",
          Authorization: "Bearer " + cookies().get("quiz-session")?.value
        }
      })
    if(res.ok) {
      const data: User = await res.json();
      return data
    } else {
      throw new Error("Can't Get User")
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}