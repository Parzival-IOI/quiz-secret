import { recordResponse } from "@/utils/definition"
import { deletePlayAction } from "@/utils/play/deletePlayAction";


const Content = (props: {data: recordResponse[] | null, loadData: Function}) => {
  return (
    <div className="flex flex-col gap-2 px-1">
      <strong className="w-full py-2 px-4 dark:bg-slate-600 bg-slate-700 text-white rounded-t-lg grid grid-cols-3 gap-1 sticky">
        <div>Name</div>
        <div>Score</div>
        <div>Latest Date</div>
      </strong>
      {
        props.data?.map((d, index)=> {
          const date = new Date(d.updatedAt)
          return (
            <div key={index} className="w-full py-2 px-4 dark:bg-slate-600 bg-slate-700 text-white rounded-lg  grid grid-cols-3 gap-1">
              <div className="overflow-x-hidden text-ellipsis">{d.quizName}</div>
              <div className="overflow-x-hidden text-ellipsis">{d.score} points</div>
              <div className="w-1/2 text-end overflow-x-hidden text-ellipsis">
                {((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear()}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Content