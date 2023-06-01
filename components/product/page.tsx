import { FaHeart, FaShoppingBag,FaEye } from "react-icons/fa";
export default function page() {
  return (
    <div className="l_product_item md:m-0 m-4">
      <div className="product-img">
        <img
          src="https://preview.colorlib.com/theme/persuit/img/product/l-product-2.jpg"
          alt=""
          className="w-full h-[200px]"
        />
      </div>
      <div className="l_p_text">
        <ul className="flex gap-1 w-full justify-center items-center">
          <li className="">
            <a href="#" className="bg-red-400 py-3 px-3 flex items-center text-white flex">
            <FaHeart />
            </a>
          </li>
          <li>
            <a className="bg-red-400 py-2 px-3 flex items-center text-white flex" href="#">
             <span className="mr-2"><FaShoppingBag /></span> Add To Cart
            </a>
          </li>
          <li className="">
            <a href="#" className="bg-red-400 py-3 px-3 flex items-center text-white flex">
            <FaEye />
            </a>
          </li>
        </ul>
        <h4>Summer Dress</h4>
        <h5>$45.05</h5>
      </div>
    </div>
    //     <div
    //     className="product__item__pic set-bg"
    //       style={{backgroundImage: `url("")`}}
    //     >
    //       <ul className="product__hover flex justify-between items-center">

    //         <li className="h-8 w-8 bg-blue-400 text-white rounded-full mt-4 ml-4 flex justify-center items-center">
    //           <a href="#">
    //             <span><FaHeart /></span>
    //           </a>
    //         </li>
    //         <li className="h-8 w-8 bg-blue-400 text-white rounded-full mt-4 mr-4 flex justify-center items-center">
    //        <a href="#">
    //             <span><FaShoppingBag /></span>
    //           </a>
    //         </li>
    //       </ul>
    //       <div>
    //       <div className="l_p_text">
    // <ul>
    // <li className="p_icon"><a href="#"><i className="icon_piechart"></i></a></li>
    // <li><a className="add_cart_btn" href="#">Add To Cart</a></li>
    // <li className="p_icon"><a href="#"><i className="icon_heart_alt"></i></a></li>
    // </ul>
    // <h4>Summer Dress</h4>
    // <h5>$45.05</h5>
    // </div>
    //       </div>
    //     </div>
  );
}
