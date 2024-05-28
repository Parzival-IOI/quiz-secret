"use server";
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export async function login(
    formData: FormData,
  ) {
    let data = null;
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
        data = await res.text()
        console.log(data);
        cookies().set("session", data, { httpOnly: true });
      }
    } catch (error) {
      console.log(error);
    }
    if(data !== null) {
      redirect("/");
    }
  }


 export async function parseJwt(token: string | null) {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

export async function logout() {
    if(cookies().get("session")) {
      cookies().delete("session");
      redirect("/login");
    }
}

export async function isLogged() {
    if(cookies().get("session")) return true;
    return false;
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
    }
  } catch (error) {
    console.log(error);
  }
  if(data) {
    redirect("/login");
  }
}