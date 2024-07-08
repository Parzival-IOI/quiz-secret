"use server";
import { redirect } from "next/navigation";
import { customFetch } from "../customFetch";

export const updateQuiz = async (id: string, formData: FormData) => {
  console.log(id, formData);
  
  const questions: any = [];
  
  const Q = {
    id: "",
    question: "",
    type: "",
    answers: [],
  }

  let answers : any = []

  const A = {
    id: "",
    answer: "",
    correct: false
  }

  let first = true;

  formData.forEach((val, key) => {
    val = "" + val;
    if(key === "question.id") {

      if(first) {
        first = false;
      } else {
        Q.answers = answers
        answers = [];
        questions.push(JSON.parse(JSON.stringify(Q)));
      }

      Q.id = val

    } else if (key === "questions.question") {
      Q.question = val
    }  else if (key === "questions.type") {
      Q.type = val
    } else if (key === "answer.id") {
      A.id = val
    } else if (key === "questions.answers.answer") {
      A.answer = val
    } else if (key === "questions.answers.correct") {
      A.correct = (val === 'true')
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

  console.log(JSON.stringify(data, null, 2));

  try {
    const url = process.env.API + "api/quiz/v2/update/" + id;
    const res = await customFetch(url, "PUT", JSON.stringify(data))
    if(res.ok) {
      // const data = await res.text();
      // return data;

      redirect("/myquiz")

    } else {
      console.log(res);
      throw new Error(await res.text())
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
