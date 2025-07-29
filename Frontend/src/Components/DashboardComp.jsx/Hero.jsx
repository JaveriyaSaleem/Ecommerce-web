import { Link } from "react-router-dom";
import HeroImg from "../../assets/Images/HeroImg.png";

const Hero = () => {
  return (
    <main className="px-10 overflow-x-clip py-10 bg-[#f0f0f0] flex flex-col-reverse md:grid md:grid-cols-2 items-center text-center md:text-left gap-5">
      
      {/* Text Content */}
      <div className="flex flex-col gap-4 items-center md:items-start">
        <h1 className="text-[32px] sm:text-[36px] md:text-[44px] font-black boldFont md:w-5/6"  data-aos="fade-up"
    data-aos-delay="100">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="md:w-4/5 pb-4"  data-aos="fade-up"
    data-aos-delay="300">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        <Link to="/shopAll">
          <button className="hover:cursor-pointer px-10 py-3 bg-black text-white rounded-full text-[14px] hover:scale-105 transition"  data-aos="zoom-in"
    data-aos-delay="500">
            Shop Now
          </button>
        </Link>

        {/* Stats */}
        <div className="flex flex-row justify-between gap-4 pt-6 w-full md:w-[90%]">
          <div className="text-center md:text-left">
            <h1 className="text-[20px] sm:text-[28px] font-bold">200+</h1>
            <p className="text-[14px] sm:text-[16px]">International Brands</p>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-[20px] sm:text-[28px] font-bold">2,000+</h1>
            <p className="text-[14px] sm:text-[16px]">High-Quality Products</p>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-[20px] sm:text-[28px] font-bold">30,000+</h1>
            <p className="text-[14px] sm:text-[16px]">Happy Customers</p>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center md:justify-end mb-6 md:mb-0">
        <img src={HeroImg} alt="Guy" className="w-[300px] sm:w-[400px] md:w-[600px]" />
      </div>
    </main>
  );
};

export default Hero;
