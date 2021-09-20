import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";

function success() {
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <main className="max-w-screen-lg mx-auto p-6 m-6 rounded-sm bg-white">
        <div className="flex items-center">
          <div className="text-green-500 h-10">
            <CheckCircleIcon className="h-full" />
          </div>
          <h3 className="font-medium text-2xl">
            Thank you, your order has been confirmed!
          </h3>
        </div>
        <div className="text-sm mt-6">
          Thank you for shopping with us. We'll send a confirmation once your
          item has been shipped, if you would like to check the status of your
          order(s) please press the link below.
        </div>
        <button
          className="button w-full h-10 flex items-center justify-center mt-6"
          onClick={() => router.push("./orders")}
        >
          Go to my orders
        </button>
      </main>
    </div>
  );
}

export default success;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
