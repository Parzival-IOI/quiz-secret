"use server";
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { JwtPayload, tokenResponse } from '@/utils/definition';

export const login = async (formData: FormData) => {
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
      throw new Error(await res.text());
    }
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
  if(data !== null) {
    redirect("/");
  }
}

export const register = async (formData: FormData) => {
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

export async function parseJwt(token: string | undefined) {
  if (!token) { return; }
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(atob(base64));
}

export async function getRole() {
  const token = cookies().get("quiz-session")?.value;
  const data: JwtPayload|null = await parseJwt(token);
  if(!data) return "";
  return data.role;
} 

export async function logout() {
  if(cookies().has("quiz-session-refresh")) {
    try {
      const url = process.env.API + "quit";
      const accessToken = "Bearer " + cookies().get("quiz-session-refresh")?.value;
      const res = await fetch(url, 
        {
          method: "POST",
          headers: {
            Authorization: accessToken
          }
        }
      )
      if(res.ok) {
        cookies().delete("quiz-session");
        cookies().delete("quiz-session-refresh");
        redirect("/login");
      } else {
        throw new Error("Con't Logout");
      }
    }
    catch (e) {
      throw e;
    }

    
  }
}


