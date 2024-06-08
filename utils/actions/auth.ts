"use server";
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { tokenResponse } from '@/utils/definition';

export async function login(formData: FormData) {
  let data: tokenResponse;
  try {
    const url = process.env.API + "auth";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        username: formData.get("username"),
        password: formData.get("password") 
      }),
    })
    if(res.ok) {
      data = await res.json()
      console.log(data);
      cookies().set("quiz-session", data.accessToken, { httpOnly: true });
      cookies().set("quiz-session-refresh", data.refreshToken, { httpOnly: true });
    }
    else {
      console.log(res);
      throw new Error(res.statusText)
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something Went Wrong");
  }
  if(data !== null) {
    redirect("/");
  }
}

export async function register(formData: FormData) {
  let data = null;
  try {
    const url = process.env.API + "register";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        username: formData.get("username"),
        password: formData.get("password"),
        email: formData.get("email"),
        role: formData.get("role")
      }),
    })
    if(res.ok) {
      data = await res.text();
    } else {
      console.log(res);
      throw new Error(res.statusText)
    }
  } catch (error) {
    console.log(error);
    throw new Error("something went wrong")
  }
  if(data) {
    redirect("/login");
  }
}


export async function parseJwt(token: string | null) {
  if (!token) { return; }
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

export async function logout() {
  if(cookies().get("quiz-session")) {
    cookies().delete("quiz-session");
    redirect("/login");
  }
}


