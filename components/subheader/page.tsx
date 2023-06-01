



import React from "react";

import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";

export default function page() {
  return (
    <>
      <div className="bg-gray-100 shadow-lg">
        <div className="container mx-auto px-6 flex gap-8 items-center ">
          <div>
            <button className="bg-blue-500 text-white px-6 py-3 flex items-center"> <span className="mr-3"><FaBars /> </span> All Categeories</button>
          </div>
          <div className="link">
            <ul className="flex gap-6 relative">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">
                  Blogs{" "}
                  <span className="absolute -top-4 bg-blue-400 p-2 rounded-full text-xs text-white h-6 flex justify-center items-center left-20">
                    New
                  </span>
                </a>
              </li>
              <li>
                <a href="">Contacts</a>
              </li>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}










