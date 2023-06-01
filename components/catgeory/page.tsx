import React from "react";

export default function page() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 container mx-auto px-6 my-16">
     
      <div className="flex">
        <div className=" bg-red-100 p-2 px-8">
          <h6 className="font-bold text-xl ">Mens</h6>
          <ul className="flex flex-col gap-y-2 mt-2">
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
            <li>
              <a href="">Home</a>
            </li>
          </ul>
        </div>
        <div className="shop">
          <div className="shop-img">
            <img
              src="https://preview.colorlib.com/theme/electro/img/shop02.png.webp"
              alt=""
            />
          </div>
          <div className="shop-body">
            <h3>
              Cameras
              <br />
              Collection
            </h3>
            <a href="#" className="cta-btn">
              Shop now <i className="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className=" bg-red-100 p-2 px-8">
          <h6 className="font-bold text-xl ">Mens</h6>
          <ul className="flex flex-col gap-y-2 mt-2">
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
        <div className="shop">
          <div className="shop-img">
            <img
              src="https://preview.colorlib.com/theme/electro/img/shop02.png.webp"
              alt=""
            />
          </div>
          <div className="shop-body">
            <h3>
              Cameras
              <br />
              Collection
            </h3>
            <a href="#" className="cta-btn">
              Shop now <i className="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className=" bg-red-100 p-2 px-8">
          <h6 className="font-bold text-xl ">Mens</h6>
          <ul className="flex flex-col gap-y-2 mt-2">
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
        <div className="shop">
          <div className="shop-img">
            <img
              src="https://preview.colorlib.com/theme/electro/img/shop02.png.webp"
              alt=""
            />
          </div>
          <div className="shop-body">
            <h3>
              Cameras
              <br />
              Collection
            </h3>
            <a href="#" className="cta-btn">
              Shop now <i className="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
