import { cookies } from "next/headers";
import { tokenResponse } from "@/libs/definition";
import { permanentRedirect } from "next/navigation";

export async function customFetch(url: string, method: string, body: any) {
  const accessToken = "Bearer " + cookies().get("quiz-session")?.value
  const res = await fetch(
    url,
    {
      method: method,
      headers: {
        "Content-type": "application/json",
        Authorization : accessToken
      },
      body: body
    }
  )
  if(!res.ok) {
    const role = await fetch(
      process.env.API + "api/role",
      {
        method: "GET",
        headers: { 
          "Content-type": "application/json",
          Authorization : accessToken
        }
      }
    )
    if(role.ok) {
      throw new Error(await res.text());
    }
    else {
      const refreshToken = "Bearer " + cookies().get("quiz-session-refresh")?.value;
      const token = await fetch(
        process.env.API + "refreshToken",
        {
          method: "POST",
          headers: {
            Authorization : refreshToken
          }
        }
      )
      if(token.ok) {
        const data: tokenResponse = await token.json();
        console.log(data);
        cookies().set("quiz-session", data.accessToken, { httpOnly: true });
        cookies().set("quiz-session-refresh", data.refreshToken, { httpOnly: true });
        
        const newRes = await fetch(
          url,
          {
            method: method,
            headers: { 
              "Content-type": "application/json",
              Authorization : "Bearer " + data.accessToken
            },
            body: body
          }
        )
        if(newRes.ok) {
          return newRes;
        }else {
          throw new Error(await newRes.text())
        }
      }
      else {
        permanentRedirect("/login");
      }
    }
  }
  return res;
}