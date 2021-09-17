import React, { forwardRef, useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { removeItem, increase, decrease } from "../slices/basketSlice";
import { useDispatch, useSelector } from "react-redux";

const BasketProduct = forwardRef(
  (
    { id, title, price, description, category, image, rating, index, quantity },
    ref
  ) => {
    const dispatch = useDispatch();

    return (
      <div ref={ref} className="bg-white space-x-2 grid grid-cols-5 p-3 m-3">
        <Image objectFit="contain" src={image} height={200} width={200} />
        <div className="col-span-3">
          <h3 className="font-medium">{title}</h3>
          <div className="flex font-medium">
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
          <p className="text-sm text-gray-900 ">{description}</p>
          <div className="mt-5 text-lg font-medium">
            <Currency quantity={price} />
          </div>
        </div>

        <div className="justify-self-end md:justify-self-stretch flex-grow flex-col justify-center space-y-3 flex">
          <div className="flex justify-between items-center">
            <button
              disabled={quantity < 2}
              onClick={() => dispatch(decrease(index))}
              className="button flex-grow"
            >
              -
            </button>
            <span className=" font-semibold text-lg mx-2 md:mx-6">
              {quantity}
            </span>
            <button
              onClick={() => dispatch(increase(index))}
              className="button flex-grow"
            >
              +
            </button>
          </div>
          <button
            onClick={() => dispatch(removeItem(index))}
            className="button"
          >
            remove
          </button>
          <div className="block md:flex items-center space-x-2 justify-end">
            <span className=" font-semibold ">Total</span>
            <div className="font-semibold text-lg">
              <Currency quantity={quantity * price} />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default BasketProduct;
