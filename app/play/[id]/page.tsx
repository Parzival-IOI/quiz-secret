import PlayQuiz from "@/components/play/PlayQuiz"


const page = ({ params }: { params: { id: string } }) => {
  
  return (
    <div>
      <PlayQuiz id={params.id}/>
    </div>
  )
}

export default page