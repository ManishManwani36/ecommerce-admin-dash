"use client";

import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { OrderColumn, columns } from "./columns";

interface Props {
  data: OrderColumn[];
}

export default function OrderClient({ data }: Props) {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage your store orders."
      />
      <Separator />
      <DataTable columns={columns} data={data} searchKey="label" />
    </>
  );
}
