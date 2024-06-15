"use server";

import { customFetch } from "@/utils/customFetch";
import { redirect } from "next/navigation";

export const updateUser = async (id: string, formData: FormData) => {
  try {
    const url = process.env.API + "api/user/update/" + id;
    const body = JSON.stringify({
      username: formData.get("username"),
      password: formData.get("password"),
      email: formData.get("email"),
      role: formData.get("role")
    })
    const res = await customFetch(url, "PUT",
      body
    )
    if(res.ok) {
      const data = await res.text();
      return data
    } else {
      console.log(res);
      throw new Error("Can't Update User")
    }
  } catch (error) {
    console.log(error);
    throw new Error("something went wrong")
  }
}