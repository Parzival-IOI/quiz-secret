import { cookies } from "next/headers";

export function isLogged() {
  if(cookies().has("quiz-session")) return true;
  return false;
}