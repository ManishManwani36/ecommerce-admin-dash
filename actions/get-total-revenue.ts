import prismadb from "@/lib/prismadb";

export const getTotaleRevenue = async (storeId: string) => {
  const paidOrders = await prismadb.order.findMany({
    where: {
      storeId,
      isPaid: true,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  const totalRevenue = paidOrders.reduce((acc, order) => {
    const orderTotal = order.orderItems.reduce((sum, orderItem) => {
      return sum + orderItem.product.price.toNumber();
    }, 0);

    return acc + orderTotal;
  }, 0);

  return totalRevenue;
};
