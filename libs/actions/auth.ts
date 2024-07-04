"use server";
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { JwtPayload, tokenResponse } from '@/libs/definition';

export const login = async (formData: FormData) => {
  let data: tokenResponse|null = null;
  const body = JSON.stringify({
    username: formData.get("username"),
    password: formData.get("password") 
  })
  try {
    for(let i=0; i<5; i++) {
      const url = process.env.API + "auth";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: body,
        cache: 'no-store'
      })
      if(res.ok) {
        data = await res.json()
        console.log(data);
        if(data !== null) {
          cookies().set("quiz-session", data.accessToken, { httpOnly: true });
          cookies().set("quiz-session-refresh", data.refreshToken, { httpOnly: true });
        }
        break;
      }
      else {
        const err = await res.text();
        if(err === "User Not Found" || err === "Bad credentials" || err === "Blocked") {
          throw new Error(err);
        }
        continue;
      }
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
  const body = JSON.stringify({
    username: formData.get("username"),
    password: formData.get("password"),
    email: formData.get("email"),
    role: formData.get("role")
  })
  try {
    const url = process.env.API + "v2/register";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: body,
    })
    if(res.ok) {
      data = await res.text();
    } else {
      console.log(res);
      throw new Error(await res.text())
    }
  } catch (error) {
    console.log(error);
    throw new Error("something went wrong")
  }
  if(data !== null) {
    redirect("/register/otp?email="+data);
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
    let res;
    try {
      const url = process.env.API + "quit";
      const refreshToken = "Bearer " + cookies().get("quiz-session-refresh")?.value;
      res = await fetch(url, 
        {
          method: "POST",
          headers: {
            Authorization: refreshToken
          }
        }
      )
      if(res.ok) {
        cookies().delete("quiz-session");
        cookies().delete("quiz-session-refresh");
      } else {
        cookies().delete("quiz-session");
        cookies().delete("quiz-session-refresh");
      }
    }
    catch (e) {
      throw e;
    }
    
    redirect("/login");

  }
}


export const otp = async (formData: FormData) => {
  let otp = "";
  formData.forEach((val, key) => {
    if(key === "otp") {
      otp = otp + val;
    }
  })
  let data;
  try {
    const url = process.env.API + "authenticateEmail";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        otp: otp,
        email: formData.get("email")
      }),
    })
    if(res.ok) {
      data = await res.json()
      console.log(data);
      cookies().set("quiz-session", data.accessToken, { httpOnly: true });
      cookies().set("quiz-session-refresh", data.refreshToken, { httpOnly: true });
    } else {
      console.log(res);
      throw new Error(res.statusText)
    }
  } catch (error) {
    console.log(error);
    throw new Error("something went wrong")
  }
  if(data !== null) {
    redirect("/");
  }
}


export const reSendOtp = async ({email} : { email : string}) => {
  let data;
  try {
    const url = process.env.API + "resendOTP";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        otp: "",
        email: email
      }),
    })
    if(res.ok) {
      data = await res.text();
      return data;
    } else {
      console.log(res);
      throw new Error(res.statusText)
    }
  } catch (error) {
    console.log(error);
    throw new Error("something went wrong")
  }
}



