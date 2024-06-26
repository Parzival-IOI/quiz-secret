import { quizzesResponse } from "@/utils/definition"
import CustomActionButton from "../CustomActionButton"

const Content = (props: {data: quizzesResponse | null}) => {
  return (
    <div className="flex flex-col gap-1 px-1 text-sm">
      {
        props.data?.map((d, index)=> {
          const date = new Date(d.createdAt)
          return (
            <div key={index} className="w-full py-2 px-4 dark:bg-slate-600 bg-slate-500 text-white rounded-lg flex items-center justify-evenly">
              <div className="w-1/2">
                <strong>{d.name}</strong>
                <div>
                  Description : &nbsp;
                  {d.description}
                </div>
              </div>
              <div className="text-end ">
                Created : &nbsp;
                {((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear()}
              </div>
              <CustomActionButton path={"play/"+d.id}  label="Play" />
            </div>
          )
        })
      }
    </div>
  )
}

export default Content