"use server";

import { customFetch } from "@/libs/customFetch";

export const createQuizAction = async (formData: FormData) => {

  const questions: any = [];
  
  const Q = {
    question: "",
    type: "",
    answers: [],
  }

  let answers : any = []

  const A = {
    answer: "",
    correct: false
  }

  let first = true;

  formData.forEach((val, key) => {
    val = "" + val;
    if(key === "questions.question") {

      if(first) {
        first = false;
      } else {
        Q.answers = answers
        answers = [];
        questions.push(JSON.parse(JSON.stringify(Q)));
      }

      Q.question = val

    } else if (key === "questions.type") {
      Q.type = val
    } else if (key === "questions.answers.answer") {
      A.answer = val
    } else if (key === "questions.answers.correct") {
      A.correct = (val === 'on')
      answers.push(JSON.parse(JSON.stringify(A)))
    }
  })

  if(!first) {
    Q.answers = answers
    questions.push(JSON.parse(JSON.stringify(Q)));
  }

  const data = {
    name: formData.get("name"),
    description: formData.get("description"),
    visibility: formData.get("visibility"),
    questions: questions
  }

  try {
    const url = process.env.API + "api/quiz/create";
    const res = await customFetch(url, "POST", JSON.stringify(data))
    if(res.ok) {
      const data = await res.text();
      return data
    } else {
      console.log(res);
      throw new Error(await res.text())
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}