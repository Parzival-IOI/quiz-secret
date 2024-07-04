"use server";

import { customFetch } from "@/libs/customFetch";
import { redirect } from "next/navigation";

export const playAction = async (id: string, formData: FormData) => {

  const questions: {questionId:string, answerId: string}[] = [];
  const question = {
    questionId : "",
    answerId: ""
  }

  formData.forEach((val, key) => {
    val = "" + val;
    if(key === "question") {
      question.questionId = val;
    } else if (key === "answer"+question.questionId) {
      question.answerId = val
      questions.push(JSON.parse(JSON.stringify(question)));
    }
  })

  const data = {
    id: id,
    questions: questions
  }

  let res;
  try {
    const url = process.env.API + "api/play/quiz/summit";
    res = await customFetch(url, "POST", JSON.stringify(data))
    if(res.ok) {
      const data: {total: number, score: number} = await res.json();
    } else {
      console.log(res);
      throw new Error(await res.text())
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  if(res.ok) {
    redirect("/play/record")
  }
}