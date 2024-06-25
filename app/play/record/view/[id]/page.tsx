import ViewPlay from "@/components/play/ViewPlay"


const page = ({ params }: { params: { id: string } }) => {
  return (
    <main>
      <ViewPlay id={params.id}/>
    </main>
  )
}

export default page