import { quizzesResponse, recordResponse } from "@/libs/definition"
import CustomActionButton from "../CustomActionButton"
import CustomDialog from "../CustomDialog"
import { Eye, Pencil, People } from "../Icon"
import { deleteQuizAction } from "@/libs/quiz/deleteAction";


const Content = (props: {data: quizzesResponse | null, loadData: Function, page: number}) => {
  return (
    <div className="flex flex-col gap-1 text-sm px-1">
      <strong className="w-full py-2 px-4 dark:bg-slate-600 bg-slate-500 text-white rounded-t-lg grid grid-cols-datatable gap-1 sticky">
        <div>Id</div>
        <div>Name</div>
        <div>Description</div>
        <div>Latest Date</div>
        <div className="text-center">Actions</div>
      </strong>
      {
        props.data?.map((d, index)=> {
          const date = new Date(d.updatedAt)
          const id = props.page + (index+1);
          return (
            <div key={index} className="w-full py-2 px-4 dark:bg-slate-600 bg-slate-500 text-white rounded-lg  grid grid-cols-datatable gap-1 items-start sm:items-center">
              <div className="overflow-x-hidden text-ellipsis">{id}</div>
              <div className="overflow-x-hidden text-ellipsis font-sans">{d.name}</div>
              <div className="overflow-x-hidden text-ellipsis font-sans">{d.description}</div>
              <div className="overflow-x-hidden text-ellipsis">
                {((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear()}
              </div>
              <div className=" h-auto flex justify-center items-center flex-wrap gap-2">

                <CustomActionButton path={"/quiz/player/" + d.id} label={<People/>}/>
                <CustomActionButton path={"/quiz/view/" + d.id} label={<Eye/>}/>
                <CustomActionButton path={"/quiz/update/" + d.id} label={<Pencil/>}/>
                <CustomDialog id={d.id} loadData={props.loadData} delete={deleteQuizAction} title="Delete Record" description="You will Delete This Quiz Record Permanently"/>

              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Content