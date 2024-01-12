/* 
- ให้เขียน Query หายอดขายทั้งหมดในแต่ละเดือนและปี
- โดยที่เรียงจากปีและเดือนล่าสุดไปเก่าที่สุด */

db.pizzaOrders.aggregate([
  {
    $group: {
      _id: {
        month: { $month: "$created_at" },
        year: { $year: "$created_at" },
      },
      total_sales: { $sum: "$total_price" },
    },
  },
  { $sort: { _id: -1 } },
]);
