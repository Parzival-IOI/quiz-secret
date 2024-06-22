import QuizCreate from "@/components/quiz/QuizCreate";
import { quiz } from "@/utils/definition";
const page = () => {
  const data : quiz = {
    id: "",
    name: "",
    description: "",
    visibility: "",
    questions: [{
        id: "",
        question: "",
        type: "",
        answers: [{
            id: "",
            answer: "",
            correct: "",
            createdAt: "",
            updatedAt: ""
        }],
        createdAt: "",
        updatedAt: ""
    }],
    createdAt: "",
    updatedAt: ""
  }
  return (
    <main className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <QuizCreate data={data}/>
    </main>
  )
}

export default page