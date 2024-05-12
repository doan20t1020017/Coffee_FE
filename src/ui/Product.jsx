import ProductItem from "../components/ProductItem";
import "./Header.css";
// import { Link } from "react-router-dom";
import { products } from "../components/ProductItem/data";

function Product() {
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <div className="nvd-subheadline ">
        <div className="nvd-subheadline-deco-line "></div>
        <div className="nvd-subheadline-lable ">featured mugs</div>
        <div className="nvd-subheadline-deco-line "></div>
      </div>
      <div className="featured-mugs w-[95%] lg:w-[65%] mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
          {products.map((item, index) => (
            <ProductItem key={index} data={item} />
          ))}
        </div>
      </div>

      <div className="nvd-subheadline ">
        <div className="nvd-subheadline-deco-line "></div>
        <div className="nvd-subheadline-lable ">more products</div>
        <div className="nvd-subheadline-deco-line "></div>
      </div>
      <div className="more-products w-[95%] xl:w-[65%] mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
          <div className="nvd-product-card ">
            <div className="h-[380px] bg-[url('./imgs/favicon/FREEZE_CHOCO.png')] bg-cover bg-no-repeat bg-center">
              <a href="/" alt="#">
                <div className="w-full h-full hover:bg-gray-900 hover:opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group:">
                  <div className="absolute bg-slate-100 text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 group-hover:block group-hover:animate-fadeIn nvd-button">
                    Đặt ngay
                  </div>
                </div>
              </a>
            </div>
            <div className="text-center my-8">
              <a href="/" alt="#">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  Socola đá xay
                </div>
              </a>
              <div className="">
                <span className=" text-gray-500">$80.000 vnd</span>
              </div>
            </div>
          </div>

          <div className="nvd-product-card ">
            <div className="h-[380px] bg-[url('./imgs/favicon/FREEZE-TRA-XANH.png')] bg-cover bg-no-repeat bg-center">
              <a href="/" alt="#">
                <div className="w-full h-full hover:bg-gray-900 hover:opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group:">
                  <div className="absolute w-[100px] bg-white py-2 px-4 top-3 right-3 text-center font-semibold text-coffee-400">
                    {" "}
                    On sale.
                  </div>
                  <div className="absolute bg-slate-100 text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 group-hsover:block group-hover:animate-fadeIn nvd-button">
                    Đặt ngay
                  </div>
                </div>
              </a>
            </div>
            <div className="text-center my-8">
              <a href="/" alt="#">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  Matcha trà xanh
                </div>
              </a>
              <div className="">
                <span className="text-xl text-coffee-400">$45.000 vnd</span>
                <span className="ml-2 text-gray-400 line-through">
                  $65.000 vnd
                </span>
              </div>
            </div>
          </div>
          <div className="nvd-product-card ">
            <div className="h-[380px] bg-[url('./imgs/favicon/PHIN_SUA_DA.png')] bg-cover bg-no-repeat bg-center">
              <a href="/" alt="#">
                <div className="w-full h-full hover:bg-gray-900 hover:opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group:">
                  <div className="absolute bg-slate-100 text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 group-hsover:block group-hover:animate-fadeIn nvd-button">
                    Đặt ngay
                  </div>
                </div>
              </a>
            </div>
            <div className="text-center my-8">
              <a href="/" alt="#">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  Coffee sữa
                </div>
              </a>
              <div className="">
                <span className=" text-gray-500">$80.000 vnd</span>
              </div>
            </div>
          </div>
          <div className="nvd-product-card ">
            <div className="h-[380px] bg-[url('./imgs/favicon/PNG-0000001808-png-do-uong-highland-coffee.png')] bg-cover bg-no-repeat bg-center">
              <a href="/" alt="#">
                <div className="w-full h-full hover:bg-gray-900 hover:opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group:">
                  <div className="absolute bg-slate-100 text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 group-hsover:block group-hover:animate-fadeIn nvd-button">
                    Đặt ngay
                  </div>
                </div>
              </a>
            </div>
            <div className="text-center my-8">
              <a href="/" alt="#">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  {" "}
                  coffee caramel
                </div>
              </a>
              <div className="">
                <span className=" text-gray-500">$80.000 vnd</span>
              </div>
            </div>
          </div>
          <div className="nvd-product-card ">
            <div className="h-[380px] bg-[url('./imgs/favicon/TRA-SEN-VANG.png')] bg-cover bg-no-repeat bg-center">
              <a href="/" alt="#">
                <div className="w-full h-full hover:bg-gray-900 hover:opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group:">
                  <div className="absolute bg-slate-100 text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 group-hsover:block group-hover:animate-fadeIn nvd-button">
                    Đặt ngay
                  </div>
                </div>
              </a>
            </div>
            <div className="text-center my-8">
              <a href="/" alt="#">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  Trà sen vàng
                </div>
              </a>
              <div className="">
                <span className=" text-gray-500">$99.000 vnd</span>
              </div>
            </div>
          </div>
          <div className="nvd-product-card ">
            <div className="h-[380px] bg-[url('./imgs/favicon/trai-vai.png')] bg-cover bg-no-repeat bg-center">
              <a href="/" alt="#">
                <div className="w-full h-full hover:bg-gray-900 hover:opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group:">
                  <div className="absolute bg-slate-100 text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 group-hsover:block group-hover:animate-fadeIn nvd-button">
                    Đặt ngay
                  </div>
                </div>
              </a>
            </div>
            <div className="text-center my-8">
              <a href="/" alt="#">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  Trà vãi khúc bạch
                </div>
              </a>
              <div className="">
                <span className=" text-gray-500">$75.000 vnd</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
