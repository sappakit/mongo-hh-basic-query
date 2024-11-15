// 1)
db.pizzaOrders.findOne({
  customer_name: "Cherlyn",
});

// 2)
db.pizzaOrders.find({
  credit_card_type: "mastercard",
});

// 3)
db.pizzaOrders.find({
  size: "medium",
});
