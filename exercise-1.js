// ให้เขียน Query หายอดเงินทั้งหมดที่จ่ายด้วยเงินสด และที่จ่ายด้วยบัตรเครดิตในแต่ละชนิด
db.pizzaOrders.aggregate([
  {
    $group: { _id: "$credit_card_type", total_paid: { $sum: "$total_price" } },
  },
]);

/* db.pizzaOrders.aggregate([
{
$group: {
_id: "$credit_card_type",
total_paid: { $sum: "$total_price" }
}
},
{
$group: {
_id: null,
totalprice: { $sum: "$total_paid" }
}
}
]);`` */
