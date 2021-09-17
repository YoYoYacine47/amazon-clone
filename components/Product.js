import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { addItem, removeItem } from "../slices/basketSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectBasket } from "../slices/basketSlice";
import { useSession, signIn } from "next-auth/client";
import { useRouter } from "next/dist/client/router";

function Product({ id, title, price, description, category, image, rating }) {
  const [session] = useSession();
  const dispatch = useDispatch();
  const items = useSelector(selectBasket);
  const router = useRouter();

  const addToBasket = () => {
    if (items.some((item) => item.id === id)) return;

    const product = {
      quantity: 1,
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
    };
    dispatch(addItem(product));
  };

  return (
    <div className="bg-white flex flex-col m-3 relative z-30 p-10">
      <div className="absolute pr-2 top-2 right-2 italic text-gray-500 text-sm cursor-pointer hover:text-gray-900">
        Add to basket
      </div>
      <Image objectFit="contain" src={image} height={200} width={200} />
      <h3 className="font-medium mt-3">{title}</h3>
      <div className="flex items-center font-medium space-x-3 mt-3">
        <div className="flex">
          {Array(parseInt(rating.rate))
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-600" />
            ))}
        </div>
        <div className="">
          <p>{rating.count} votes</p>
        </div>
      </div>
      <p className="text-sm text-gray-900 line-clamp-2  mt-3">{description}</p>
      <div className="mt-5 text-lg font-medium">
        {session && <Currency quantity={price} />}
      </div>

      <button
        onClick={session ? addToBasket : signIn}
        className="mt-auto button"
      >
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
