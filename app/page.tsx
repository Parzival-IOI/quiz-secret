import DataTable from "@/components/main/DataTable";
import { fetchTable } from "@/utils/actions/listdata";
import { quizDataTable } from "@/utils/data";

export default function Home() {
  return (
    <main className="mx-auto lg:w-full md:max-w-4xl h-[90vh]">
      <DataTable fetchTable={fetchTable} api={quizDataTable}></DataTable>
    </main>
  );
}
