import { recordResponse } from "@/utils/definition"
import CustomActionButton from "../CustomActionButton"
import CustomDialog from "../CustomDialog"
import { Pencil } from "../Icon"
import { deletePlayAction } from "@/utils/play/deletePlayAction";


const Content = (props: {data: recordResponse[] | null, loadData: Function}) => {
  return (
    <div className="flex flex-col gap-2 px-1">
      <strong className="w-full py-2 px-4 dark:bg-slate-600 bg-slate-700 text-white rounded-t-lg grid grid-cols-4 gap-1 sticky">
        <div>Name</div>
        <div>Score</div>
        <div>Latest Date</div>
        <div className="text-center">Actions</div>
      </strong>
      {
        props.data?.map((d, index)=> {
          const date = new Date(d.updatedAt)
          return (
            <div key={index} className="w-full py-2 px-4 dark:bg-slate-600 bg-slate-700 text-white rounded-lg  grid grid-cols-4 gap-1">
              <div className="overflow-x-hidden text-ellipsis">{d.quizName}</div>
              <div className="overflow-x-hidden text-ellipsis">{d.score} points</div>
              <div className="w-1/2 text-end overflow-x-hidden text-ellipsis">
                {((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear()}
              </div>
              <div className=" flex justify-center items-center gap-2">
                
                <CustomActionButton path={"/user/update/" + d.id} label={Pencil()}/>
                <CustomDialog id={d.id} loadData={props.loadData} delete={deletePlayAction} title="Delete Record" description="You will Delete This Quiz Record Permanently"/>

              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Content