import ViewQuiz from "@/components/quiz/ViewQuiz"


const page = ({ params }: { params: { id: string } }) => {
  return (
    <main >
      <ViewQuiz id={params.id} />
    </main>
  )
}

export default page