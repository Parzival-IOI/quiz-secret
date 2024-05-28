import DataTable from "@/components/DataTable";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto lg:w-full md:max-w-3xl h-[90vh] bg-rose-400">
      <DataTable></DataTable>
    </main>
  );
}
