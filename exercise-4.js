// 1)
db.pizzaOrders.find({
  $and: [{ quantity: { $lt: 5 } }, { credit_card_type: "mastercard" }],
});

// 2)
db.pizzaOrders.find({
  $and: [{ size: "small" }, { quantity: { $gt: 1 } }, { quantity: { $lt: 5 } }],
});

// 3)
db.pizzaOrders.find({
  $and: [
    { quantity: { $gt: 10 } },
    { credit_card_type: { $ne: "mastercard" } },
  ],
});
