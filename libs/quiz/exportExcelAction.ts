"use server";

import { customFetch } from "@/libs/customFetch";
import { cookies } from "next/headers";

export const exportExcelAction = async () => {
  return "Bearer " + cookies().get("quiz-session")?.value
}