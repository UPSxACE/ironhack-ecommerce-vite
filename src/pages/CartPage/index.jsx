import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import getRequest from "@/utils/get-request";
import { useEffect, useState } from "react";
import { IoBagCheck } from "react-icons/io5";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const SHIPPING_PRICE = 21;

function getCart() {
  const cart = localStorage.getItem("cart") || "{}";
  const cartObj = JSON.parse(cart);
  return cartObj;
}

export default function CartPage() {
  const [cartDetailed, setCartDetailed] = useState([]);
  const [submited, setSubmited] = useState(false);

  useEffect(() => {
    async function fetchCartDetails() {
      const cart = getCart();
      const arrDetailedCartItems = [];

      for await (let productId of Object.keys(cart)) {
        const { error, result } = await getRequest("/products/" + productId);
        if (!error) {
          arrDetailedCartItems.push({ ...result, _amount: cart[productId] });
        }
      }

      setCartDetailed(arrDetailedCartItems);
    }

    fetchCartDetails();
  }, []);

  function handleAddMoreToCart(productId, indexOnState) {
    const cart = localStorage.getItem("cart") || "{}";
    const cartObj = JSON.parse(cart);
    const current = cartObj[productId] || 0;
    const newValue = current + 1;
    cartObj[productId] = newValue;
    const newCart = JSON.stringify(cartObj);
    localStorage.setItem("cart", newCart);
    setCartDetailed((current) => {
      const newState = [...current];
      newState[indexOnState]._amount = newValue;
      return newState;
    });
  }

  function handleLessOnCart(productId, indexOnState) {
    const cart = localStorage.getItem("cart") || "{}";
    const cartObj = JSON.parse(cart);
    const current = cartObj[productId] || 0;
    const newValue = Math.max(current - 1, 1);

    cartObj[productId] = newValue;

    const newCart = JSON.stringify(cartObj);
    localStorage.setItem("cart", newCart);
    setCartDetailed((current) => {
      const newState = [...current];
      newState[indexOnState]._amount = newValue;
      return newState;
    });
  }

  function handleDeleteOnCart(productId, indexOnState) {
    const cart = localStorage.getItem("cart") || "{}";
    const cartObj = JSON.parse(cart);
    delete cartObj[productId];

    const newCart = JSON.stringify(cartObj);
    localStorage.setItem("cart", newCart);

    setCartDetailed((current) => {
      const newState = [...current];
      newState.splice(indexOnState, 1);
      return newState;
    });
  }

  function handleClearCart() {
    localStorage.setItem("cart", "{}");
    setCartDetailed([]);
  }

  function handleSubmit() {
    handleClearCart();
    setSubmited(true);
  }

  const summary = cartDetailed.reduce(
    (accumulated, cartItem) => {
      const subtotal = Number(cartItem.price) * cartItem._amount;
      const generalTax = subtotal * 0.1;
      const gstTax = subtotal * 0.1;
      const total = subtotal + generalTax + gstTax;

      accumulated.subtotal += subtotal;
      accumulated.tax += generalTax;
      accumulated.gst += gstTax;
      accumulated.total += total;

      return accumulated;
    },
    {
      subtotal: 0,
      tax: 0,
      gst: 0,
      total: SHIPPING_PRICE,
    }
  );

  if (submited) {
    return (
      <div className="flex-1 flex justify-center items-center">
        <div className="flex flex-col text-2xl text-center justify-center items-center bg-gray-100 p-5 md:p-14 rounded-xl text-gray-500">
          <IoBagCheck className="text-green-600 text-[5rem] md:text-[6rem] mb-4" />
          <p>Thank you.</p>
          <p>Your order has been received</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-2 md:gap-6">
        <section id="shopping-cart" className="flex flex-col">
          <article
            id="summary"
            className="bg-gray-100 flex flex-col gap-2 p-3 rounded-md"
          >
            <h1 className="text-2xl font-bold">Summary</h1>
            <h2 className="text-lg">Estimate Shipping and Tax</h2>
            <Separator />
            <section
              id="summary-details"
              className="grid grid-cols-[60%_auto] gap-y-2"
            >
              <label className="text-md font-bold">Subtotal</label>
              <span className="text-md font-bold text-right">
                ${summary.subtotal.toFixed(2)}
              </span>
              <label className="text-md font-bold">Shipping</label>
              <span className="text-md font-bold text-right">
                ${summary.total > 21 ? SHIPPING_PRICE.toFixed(2) : "0.00"}
              </span>
              <p className="col-span-2 text-gray-500">
                (Standard Rate - Price may vary depending on the
                item/destination. TECS Staff will contact you.)
              </p>
              <label className="text-md font-bold">Tax</label>
              <span className="text-md font-bold text-right">
                ${summary.tax.toFixed(2)}
              </span>
              <label className="text-md font-bold">GST (10%)</label>
              <span className="text-md font-bold text-right">
                ${summary.gst.toFixed(2)}
              </span>
              <label className="text-md font-bold">Order Total</label>
              <span className="text-md font-bold text-right text-lg">
                ${summary.total.toFixed(2)}
              </span>
              <Button
                className="col-span-2 rounded-full bg-mainBlack"
                onClick={handleSubmit}
              >
                Proceed to Checkout
              </Button>
            </section>
          </article>
        </section>
        <section id="cart-items" className="flex flex-col gap-3 md:order-first">
          {cartDetailed.length === 0 && (
            <article className="h-[12.75rem] flex justify-center items-center bg-gray-100 rounded-lg text-gray-400 font-light select-none">
              Empty Cart
            </article>
          )}
          {cartDetailed.map((item, index) => {
            const onClickLess = () => handleLessOnCart(item.id, index);
            const onClickMore = () => handleAddMoreToCart(item.id, index);
            const onDelete = () => handleDeleteOnCart(item.id, index);

            return (
              <CartItem
                key={index}
                data={item}
                onClickLess={onClickLess}
                onClickMore={onClickMore}
                onDelete={onDelete}
              />
            );
          })}

          {/* Buttons */}
          <div className="flex gap-2 flex-wrap">
            <Link to="/products">
              <Button
                variant="outline"
                className="rounded-full xs:px-4 lg:px-8"
                size="sm"
              >
                Continue Shopping
              </Button>
            </Link>
            <Button
              className="rounded-full xs:px-4 lg:px-8 bg-mainBlack"
              size="sm"
              onClick={handleClearCart}
            >
              Clear Shopping Cart
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
