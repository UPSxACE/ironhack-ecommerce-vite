import NumberInput from "@/components/NumberInput";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

function getInitialValue(productId) {
  const cart = localStorage.getItem("cart") || "{}";
  const cartObj = JSON.parse(cart);
  const current = cartObj[productId] || 0;
  return current;
}

export default function AddToCart({ productId }) {
  const [value, setValue] = useState(getInitialValue(productId));

  function handleAddMoreToCart() {
    const cart = localStorage.getItem("cart") || "{}";
    const cartObj = JSON.parse(cart);
    const current = cartObj[productId] || 0;
    const newValue = current + 1;
    cartObj[productId] = newValue;
    const newCart = JSON.stringify(cartObj);
    localStorage.setItem("cart", newCart);
    setValue(newValue);
  }

  function handleLessOnCart() {
    const cart = localStorage.getItem("cart") || "{}";
    const cartObj = JSON.parse(cart);
    const current = cartObj[productId] || 0;
    const newValue = Math.max(current - 1, 0);
    if (newValue === 0) {
      delete cartObj[productId];
    } else {
      cartObj[productId] = newValue;
    }
    const newCart = JSON.stringify(cartObj);
    localStorage.setItem("cart", newCart);
    setValue(newValue);
  }

  return (
    <>
      <NumberInput
        value={value}
        onClickLess={handleLessOnCart}
        onClickMore={handleAddMoreToCart}
        className="w-full shrink-0 basis-full xs:basis-0"
      />
      <Link className="flex-1 flex" to={value > 0 ? "/cart" : undefined}>
        <Button className="flex-1 bg-mainBlack">Add to Cart</Button>
      </Link>
    </>
  );
}
