import QuizUpdate from "@/components/quiz/QuizUpdate"

const page = ({ params }: { params: { id: string } }) => {
  return (
    <main className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <QuizUpdate id={params.id} />
    </main>
  )
}

export default page