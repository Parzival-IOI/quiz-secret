import { quizzesResponse } from "@/libs/definition"
import CustomActionButton from "../CustomActionButton"
import CustomDialog from "../CustomDialog"
import { Download, Eye, Pencil, People } from "../Icon"
import { deleteQuizAction } from '@/libs/quiz/deleteAction';
import { exportExcelAction } from "@/libs/quiz/exportExcelAction";
import { toast } from "sonner";


const Content = (props: {data: quizzesResponse | null, loadData: Function, page: number}) => {
  const getExel = async (id: string, name: string) => {
    const access = await exportExcelAction();
    const response = await fetch('/api/quiz/export/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/xlsx',
        Authorization : access
      },
    })

    if(response.ok) {
      toast.error("Something Went Wrong");
      return;
    }

    const blob = await response.blob(); 

    if(blob.size == 0) {
      toast.error("Something Went Wrong");
      return
    }
    // Create blob link to download
    const url = window.URL.createObjectURL(
      new Blob([blob]),
    );
    console.log(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      `${name}.xlsx`,
    );

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode?.removeChild(link);
  }

  return (
    <div className="flex flex-col gap-1 text-sm px-1">
      <strong className="w-full py-2 px-4 dark:bg-slate-600 bg-slate-500 text-white rounded-t-lg grid grid-cols-datatable gap-1 sticky">
        <div>Id</div>
        <div>Name</div>
        <div>Description</div>
        <div>Created Date</div>
        <div className="text-center">Actions</div>
      </strong>
      {
        props.data?.map((d, index)=> {
          const date = new Date(d.createdAt);
          const id = props.page + index + 1;
          return (
            <div key={index} className="w-full py-2 px-4 dark:bg-slate-600 bg-slate-500 text-white rounded-lg grid grid-cols-datatable  items-start sm:items-center gap-1">
              <div className="overflow-x-hidden text-ellipsis">{id}</div>
              <div className="overflow-x-hidden text-ellipsis font-sans">{d.name}</div>
              <div className="overflow-x-hidden text-ellipsis  font-sans">
                {d.description}
              </div>
              <div className="overflow-x-hidden text-ellipsis">
                {((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear()}
              </div>
              <div className=" flex justify-center items-center flex-wrap gap-2">
                
                <button type="button" className="px-2 py-2 rounded-md dark:bg-slate-500 dark:hover:bg-slate-700 bg-slate-400 hover:bg-slate-300"
                  onClick={() => getExel(d.id, d.name)} ><Download /></button>
                <CustomActionButton path={"/quiz/player/" + d.id} label={<People/>}/>
                <CustomActionButton path={"/quiz/view/" + d.id} label={<Eye/>}/>
                <CustomActionButton path={"/quiz/update/" + d.id} label={<Pencil/>}/>
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