import React from 'react'

export default function page() {
  return (
    <div className="container mx-auto px-6">
    <div className=" flex justify-between ">
      <div className="content">
        <h1 className="pt-20 pb-8 text-5xl font-bold capitalize text-blue-400">
          new era of smartphones
        </h1>
        <div className="flex gap-6 mt-8">
          <span className="text-gray-400 font-medium text-xl line-through">
            $530
          </span>
          <span className="text-blue-500 font-bold text-2xl">$460</span>
        </div>
        <div className="text-black mt-2 mb-6">Apple Iphone 6s</div>
        <div className="">
          <a
            href="#"
            className="bg-blue-400 text-white py-2 px-6 rounded-md"
          >
            Shop Now
          </a>
        </div>
      </div>
      <div className="pt-4">
        <img src="/header.webp" alt="" />
      </div>
    </div>
  </div>
  )
}
