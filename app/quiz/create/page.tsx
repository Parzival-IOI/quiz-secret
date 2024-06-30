import QuizCreate from "@/components/quiz/QuizCreate";
import { quiz } from "@/utils/definition";
const page = () => {
  return (
    <main className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <QuizCreate />
    </main>
  )
}

export default page