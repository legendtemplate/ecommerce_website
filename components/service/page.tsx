import React from 'react'

import { FaShippingFast, FaMoneyBill, FaHeadphones } from "react-icons/fa";
export default function page() {
  return (
    <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-6 gap-3 mt-5 mb-12">
    <div className="flex flex-col bg-blue-200  p-4 ">
      <span className="bg-blue-100 p-4 w-16 h-16 rounded-full flex justify-center items-center text-2xl">
        <FaShippingFast />
      </span>
      <div className="p-2">
        <h3 className="text-lg font-semibold text-black pt-2">
          Free Shipping
        </h3>
        <p className="text-base font-normal text-gray-500">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
    </div>
    <div className="flex flex-col bg-blue-200  p-4 ">
      <span className="bg-blue-100 p-4 w-16 h-16 rounded-full flex justify-center items-center text-2xl">
        <FaMoneyBill />
      </span>
      <div className="p-2">
        <h3 className="text-lg font-semibold text-black pt-2">
          Free Shipping
        </h3>
        <p className="text-base font-normal text-gray-500">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
    </div>
    <div className="flex flex-col bg-blue-200  p-4 ">
      <span className="bg-blue-100 p-4 w-16 h-16 rounded-full flex justify-center items-center text-2xl">
        <FaMoneyBill />
      </span>
      <div className="p-2">
        <h3 className="text-lg font-semibold text-black pt-2">
          Free Shipping
        </h3>
        <p className="text-base font-normal text-gray-500">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
    </div>
    <div className="flex flex-col bg-blue-200  p-4 ">
      <span className="bg-blue-100 p-4 w-16 h-16 rounded-full flex justify-center items-center text-2xl">
        <FaHeadphones />
      </span>
      <div className="p-2">
        <h3 className="text-lg font-semibold text-black pt-2">
          Free Shipping
        </h3>
        <p className="text-base font-normal text-gray-500">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
    </div>
    

  </div>
  )
}
