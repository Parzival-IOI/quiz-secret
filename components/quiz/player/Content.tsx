import CustomActionButton from "@/components/CustomActionButton";
import { Eye } from "@/components/Icon";
import { recordResponse } from "@/utils/definition"


const Content = (props: {data: recordResponse[] | null, loadData: Function, page: number}) => {
  return (
    <div className="flex flex-col gap-1 text-sm px-1">
      <strong className="w-full py-2 px-4 dark:bg-slate-600 bg-slate-500 text-white rounded-t-lg grid grid-cols-datatable gap-1 sticky">
        <div>Id</div>
        <div>Name</div>
        <div>Quiz Name</div>
        <div>Score</div>
        <div>Latest Date</div>
        <div className="text-center">Action</div>
      </strong>
      {
        props.data?.map((d, index)=> {
          const date = new Date(d.updatedAt)
          const id = props.page + index + 1;
          return (
            <div key={index} className="w-full py-2 px-4 dark:bg-slate-600 bg-slate-500 text-white rounded-lg grid grid-cols-datatable gap-1">
              <div className="overflow-x-hidden text-ellipsis">{id}</div>
              <div className="overflow-x-hidden text-ellipsis font-sans">{d.username}</div>
              <div className="overflow-x-hidden text-ellipsis font-sans">{d.quizName}</div>
              <div className="overflow-x-hidden text-ellipsis">{d.score} points</div>
              <div className="overflow-x-hidden text-ellipsis">
                {((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear()}
              </div>
              <div className=" flex justify-center items-center flex-wrap gap-2">
                <CustomActionButton path={"/play/record/view/" + d.id} label={<Eye/>} />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Content