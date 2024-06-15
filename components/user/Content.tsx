import { usersResponse } from "@/utils/definition"
import { Pencil, Trash } from "@/components/Icon";
import CustomActionButton from "@/components/CustomActionButton";
import { deleteUser } from "@/utils/user/deleteAction";
import CustomDialog from "../CustomDialog";

const Content = (props: {data: usersResponse | null, loadData: Function}) => {
  return (
    <div className="flex flex-col gap-2 px-1">
      <strong className="w-full py-2 px-4 dark:bg-slate-600 bg-slate-700 text-white rounded-t-lg grid grid-cols-5 gap-1 sticky">
        <div>Name</div>
        <div>Email</div>
        <div>Role</div>
        <div>Date</div>
        <div className="text-center">Actions</div>
      </strong>
      {
        props.data?.map((d, index)=> {
          const date = new Date(d.createdAt)
          return (
            <div key={index} className="w-full py-2 px-4 dark:bg-slate-600 bg-slate-700 text-white rounded-lg grid grid-cols-5 gap-1">
              <div>{d.name}</div>
              <div>{d.email ?? "Null"}</div>
              <div>{d.role ?? "Null"}</div>
              <div>
                {((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear()}
              </div>
              <div className=" flex justify-center items-center gap-2">

                <CustomActionButton path={"/user/update/" + d.id} label={Pencil()}/>
                <CustomDialog id={d.id} loadData={props.loadData}/>

              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Content