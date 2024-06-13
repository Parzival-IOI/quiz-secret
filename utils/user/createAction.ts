"use server"

import { customFetch } from "../customFetch";

export const createUser = async (formData: FormData) => {
  let data = null;
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
      data = await res.text();
    } else {
      console.log(res);
      throw new Error("Can't Create User")
    }
  } catch (error) {
    console.log(error);
    throw new Error("something went wrong")
  }
}