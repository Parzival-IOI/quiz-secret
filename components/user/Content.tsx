import { usersResponse } from "@/libs/definition"
import { Pencil } from "@/components/Icon";
import CustomActionButton from "@/components/CustomActionButton";
import { deleteUserAction } from "@/libs/user/deleteAction";
import CustomDialog from "../CustomDialog";

const Content = (props: {data: usersResponse | null, loadData: Function, page: number}) => {
  return (
    <div className="flex flex-col gap-1 text-sm px-1">
      <strong className="w-full py-2 px-4 dark:bg-slate-600 bg-slate-500 text-white rounded-t-lg grid grid-cols-datatable gap-1 sticky">
        <div>Id</div>
        <div>Name</div>
        <div>Email</div>
        <div>Role</div>
        <div>Date</div>
        <div className="text-center">Actions</div>
      </strong>
      {
        props.data?.map((d, index)=> {
          const date = new Date(d.createdAt)
          const id = props.page + index + 1;
          return (
            <div key={index} className="w-full py-2 px-4 dark:bg-slate-600 bg-slate-500 text-white rounded-lg grid grid-cols-datatable gap-1">
              <div className="overflow-x-hidden text-ellipsis">{id}</div>
              <div className="overflow-x-hidden text-ellipsis font-sans">{d.name}</div>
              <div className="overflow-x-hidden text-ellipsis font-sans">{d.email ?? "Null"}</div>
              <div className="overflow-x-hidden text-ellipsis">{d.role ?? "Null"}</div>
              <div className="overflow-x-hidden text-ellipsis">
                {((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear()}
              </div>
              <div className="flex justify-center items-center gap-2">

                <CustomActionButton path={"/user/update/" + d.id} label={Pencil()}/>
                <CustomDialog id={d.id} loadData={props.loadData} delete={deleteUserAction} title="Delete User" description="You Will Delete This User Permanently"/>

              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Content