import { quizzesResponse } from "@/utils/definition"
import CustomActionButton from "../CustomActionButton"
import CustomDialog from "../CustomDialog"
import { Pencil } from "../Icon"
import { deleteQuizAction } from '@/utils/quiz/deleteAction';


const Content = (props: {data: quizzesResponse | null, loadData: Function}) => {
  return (
    <div className="flex flex-col gap-2 px-1">
      <strong className="w-full py-2 px-4 dark:bg-slate-600 bg-slate-700 text-white rounded-t-lg grid grid-cols-4 gap-1 sticky">
        <div>Name</div>
        <div>Description</div>
        <div>Created Date</div>
        <div className="text-center">Actions</div>
      </strong>
      {
        props.data?.map((d, index)=> {
          const date = new Date(d.createdAt)
          return (
            <div key={index} className="w-full py-2 px-4 dark:bg-slate-600 bg-slate-700 text-white rounded-lg  grid grid-cols-4 gap-1">
              <div>{d.name}</div>
              <div>
                {d.description}
              </div>
              <div className="w-1/2 text-end ">
                {((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear()}
              </div>
              <div className=" flex justify-center items-center gap-2">

                <CustomActionButton path={"/quiz/update/" + d.id} label={Pencil()}/>
                <CustomDialog id={d.id} loadData={props.loadData} delete={deleteQuizAction} title="Delete Quiz" description="You will Delete This Quiz Permanently"/>

              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Content