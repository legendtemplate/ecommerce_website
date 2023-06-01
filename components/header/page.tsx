



// "use client";
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Bannner from "../banner/page";
// import { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// export default function Page() {
//   const router = useRouter();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [address, setAddress] = useState("");
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(name, email, password, address);

//     try {
//       const res = await fetch("http://localhost:3000/api/user", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           password,
//           address,
//         }),
//       });
//       const result = await res.json();
//       console.log(result);

//       router.push("/login/");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={name}
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//       />{" "}
//       <hr />
//       <input
//         type="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//       />{" "}
//       <hr />
//       <input
//         type="password"
//         placeholder="Enter your password"
//         value={password}
//         onChange={(e) => {
//           setPassword(e.target.value);
//         }}
//       />{" "}
//       <hr />
//       <input
//         type="text"
//         placeholder="Enter your Address"
//         value={address}
//         onChange={(e) => {
//           setAddress(e.target.value);
//         }}
//       />{" "}
//       <hr />
//       <button className="py-3 px-6 bg-red-400 block w-full">Submit</button>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//       {/* Same as */}
//       <ToastContainer />
//     </form>
//   );
// }
import React from "react";
import { FaSearch,FaShoppingBasket,FaHeart,FaUser,FaUserCircle } from "react-icons/fa";

export default function page() {
  return (
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="logo">
        <img
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
          alt=""
          className="md:h-10 h-7 md:w-10 w-7"
        />
      </div>
      <div className="flex gap-4 relative items-center">
        <a href=""
          className="bg-gray-200 p-2 rounded-full md:h-9 h-8 md:w-9 w-8 flex justify-center items-center">
          <FaSearch />
        </a>
        <a href=""
          className="bg-gray-200 p-2 rounded-full md:h-9 h-8 md:w-9 w-8 flex justify-center items-center">
          <FaShoppingBasket />
          <span className="absolute -top-3 left-[70px] rounded-full bg-blue-500 text-white p-2 text-base md:h-6 h-5 md:w-6 w-5 flex justify-center items-center">
            1
          </span>
        </a>
        <a href=""
          className="bg-gray-200 p-2 rounded-full md:h-9 h-8 md:w-9 w-8 flex justify-center items-center">
          <FaHeart />
          <span className="absolute -top-3 left-[120px] rounded-full bg-blue-500 text-white p-2 text-base md:h-6 h-5 md:w-6 w-5 flex justify-center items-center">
            1
          </span>
        </a>
      </div>
    </div>
  );
}
