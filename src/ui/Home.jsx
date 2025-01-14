import { Link } from "react-router-dom";
import CreateUser from "../features/user/CreateUser";
import "./Header.css";

function Home() {
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <div class="slider h-[530px] bg-[url('./imgs/chuyen-doi-so-cho-doanh-nghiep-3.png')] bg-cover bg-no-repeat bg-bottom">
        <div class="w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div class="mx-16 text-white text-center">
            <div class=" uppercase mb-6">
              Sự hài lòng của bạn là thành công của chúng tôi{" "}
            </div>
            <div class=" font-medium text-5xl mb-6">Coffee IT</div>
            <div class=" font-medium text-lg mb-8">Nơi tạo ra giá trị </div>
          </div>
        </div>
      </div>
      <div class="story flex justify-center items-center">
        <div class="px-4 sm:px-16 md:px-32 lg:px-64 xl:px-96 py-32 text-center">
          <div class="text-3xl leading-10 mb-6 ">
            Mỗi hạt cà phê là một câu chuyện về đam mê
          </div>
          <div class=" text-gray-500 leading-7 mb-6">
            Luôn cố gắng không ngừng nổ lực bạn sẽ tạo ra được thành quả xứng
            đáng .
          </div>
        </div>
      </div>
      <div class="nvd-subheadline ">
        <div class="nvd-subheadline-deco-line "></div>
        <div class="nvd-subheadline-lable ">
          Mua 3 cốc được miễn phí giao hàng
        </div>
        <div class="nvd-subheadline-deco-line "></div>
      </div>

      <div class="coffee-magazine w-[95%] xl:w-[65%] mx-auto mb-16">
        <div class="flex flex-col md:flex-row justify-center items-center gap-5">
          <div class="nvd-magazine-images basis-1/2 md:flex md:lex-row gap-5 w-full h-full mb-5 md:mb-0">
            <div class="nvd-magazine-big-image h-[280px] basis-2/3 mb-5 md:mb-0 bg-[url('./imgs/favicon/big.png')] bg-cover bg-no-repeat bg-center"></div>
            <div class="nvd-magazine-small-images basis-1/3 flex flex-row md:flex-col gap-5">
              <div class=" h-[130px] basis-1/2 bg-[url('./imgs/favicon/small01.png')] bg-cover bg-no-repeat bg-center"></div>
              <div class=" h-[130px] basis-1/2 bg-[url('./imgs/favicon/small02.png')] bg-cover bg-no-repeat bg-center"></div>
            </div>
          </div>
          <div class="nvd-magazine-post basis-1/2 pl-8 xl:pl-14 text-center md:text-left ">
            <div class="uppercase tracking-wider text-gray-500 font-medium text-xs mb-4 ">
              Ưu đãi cao cấp
            </div>
            <div class="text-4xl mb-4">
              Bạn muốn trở thành cao cấp của cửa hàng chúng tôi
            </div>
            <div class="text-gray-500 leading-7 mb-4">
              Tích lũy đủ trên 50 đơn hàng để thành khách hàng cao cấp
            </div>
            <Link
              to="/product"
              class="nvd-button bg-gray-900 text-white w-max mx-auto md:mx-0"
            >
              Bắt đầu mua sắm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
