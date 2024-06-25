import ViewQuiz from "@/components/quiz/ViewQuiz"


const page = ({ params }: { params: { id: string } }) => {
  return (
    <main className="mx-auto lg:w-full md:max-w-3xl">
      <ViewQuiz id={params.id} />
    </main>
  )
}

export default page