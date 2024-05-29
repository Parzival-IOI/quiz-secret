import DataTable from "@/components/Table/DataTable";
import { fetchTable } from "@/utils/listdata";

export default function Home() {
  return (
    <main className="mx-auto lg:w-full md:max-w-3xl h-[90vh]">
      <DataTable fetchTable={fetchTable}></DataTable>
    </main>
  );
}
