import prismadb from "@/lib/prismadb";

interface Props {
  params: {
    storeId: string;
  };
}
export default async function DashboardPage({ params }: Props) {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return <>Active store: {store?.name}</>;
}
