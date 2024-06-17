"use server"

import { redirect } from "next/navigation";
import { customFetch } from "../customFetch";

export const createUser = async (formData: FormData) => {
  try {
    const url = process.env.API + "api/user/create";
    const res = await customFetch(url, "POST",
      JSON.stringify({
        username: formData.get("username"),
        password: formData.get("password"),
        email: formData.get("email"),
        role: formData.get("role")
      }),
    )
    if(res.ok) {
      const data = await res.text();
    } else {
      console.log(res);
      throw new Error(await res.text());
    }
  } catch(error) {
    console.log(error);
    throw error;
  }

  redirect("/user");
}