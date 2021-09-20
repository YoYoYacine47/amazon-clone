import React, { Fragment, useDispatch } from "react";
import Header from "../components/Header";
import BasketProduct from "../components/BasketProduct";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectBasket, selectTotal } from "../slices/basketSlice";
import FlipMove from "react-flip-move";
import Currency from "react-currency-formatter";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useSession } from "next-auth/client";

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);

function Checkout() {
  const items = useSelector(selectBasket);
  const total = useSelector(selectTotal);
  const [session] = useSession();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    // call
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items,
      email: session.user.email,
    });

    //redirect
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) alert(result.error.message);
  };

  return (
    <Fragment>
      <Header className="fixed" />
      <main className=" max-w-[90rem] bg-gray-100 mx-auto">
        <div className="m-5 flex-grow shadow-md">
          <Image
            src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
            objectFit="contain"
            width={1020}
            height={250}
          />

          <h3 className="m-5 text-lg font-semibold">
            {items.length > 0 ? `Shopping Basket` : "No Products Buoyed"}
          </h3>

          <div className="m-5 mx-auto flex justify-evenly items-center  p-3 bg-gray-400 border rounded-sm w-[30rem]">
            <div className="flex flex-col">
              <span className="font-medium p-3">Number Of Items</span>
              <span className="font-medium p-3">Total</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-medium p-3">{items.length}</span>
              <div className="text-lg font-medium p-3">
                <Currency quantity={total} />
              </div>
            </div>
            <button
              disabled={!session}
              className={`button ${!session && "bg-gray-500"}`}
              role="link"
              onClick={createCheckoutSession}
            >
              CheckOut
            </button>
          </div>

          <div className="">
            <FlipMove>
              {items.map(
                (
                  {
                    id,
                    title,
                    price,
                    description,
                    category,
                    image,
                    rating,
                    quantity,
                  },
                  i
                ) => (
                  <BasketProduct
                    index={i}
                    key={`qwe ${id}`}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    rating={rating}
                    quantity={quantity}
                  />
                )
              )}
            </FlipMove>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Checkout;
