import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment, removeFromCart } from "./Store";
import {decrement, increment , removeFromCart} from "./Store";
import { useState } from "react";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [discountedAmount, setDiscountedAmount] = useState(0);

  // Handler for selecting the discount
  const handleDiscount = (disValue) => {
    setDiscountedAmount(disValue);
  };

  // Logic to calculate totals
  const calculateTotal = () => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = total * (discountedAmount / 100);
    const netAmount = total - discount;

    return {
      total: parseFloat(total.toFixed(2)),
      discount: parseFloat(discount.toFixed(2)),
      netAmount: parseFloat(netAmount.toFixed(2)),
    };
  };

  const { total, discount, netAmount } = calculateTotal();

  const all = cart.map((item, index) => (
    <li key={index}>
      Name: {item.name} <br /> Price: ${item.price} <br /> Qty: {item.quantity}
      <button onClick={() => dispatch(increment(item.name))}>+</button>
      --<button onClick={() => dispatch(decrement(item.name))}>-</button>
      --<button onClick={() => dispatch(removeFromCart(item.name))}>remove</button>
    </li>
  ));

  return (
    <>
      <h2>{cart.length > 0 ? <ul>{all}</ul> : "Item Not Added In Cart"}</h2>
      <h3>Total: ${total}</h3>
      <button onClick={() => handleDiscount(10)}>Apply 10% Discount</button>
      <button onClick={() => handleDiscount(20)}>Apply 20% Discount</button>
      <button onClick={() => handleDiscount(30)}>Apply 30% Discount</button>
      <h3>Discount Amount: ${discount}</h3>
      <h3>Final Amount to Pay: ${netAmount}</h3>
    </>
  );
}

export default Cart;