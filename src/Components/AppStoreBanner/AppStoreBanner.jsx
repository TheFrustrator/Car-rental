import React from "react";
import { BannerImg } from "../../assets/assets";
import { assets } from "../../assets/assets";

const AppStoreBanner = () => {
  return (
    <div className="container pb-14 ">
      <div
        className="text-balck py-10 sm:min-[400px] sm:grid sm:place-items-center rounded-xl"
        style={BannerImg}
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <h1 date-aos="fade-up" className="text-2xl text-center sm:text-4xl font-semibold font-serif">Get Started with our app</h1>
            <p data-aos="fade-up" className="text-center sm:px-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              repellat illum tenetur voluptates?
            </p>
            <div data-aos="fade-up" className="flex flex-wrap justify-center items-center gap-4 ">
              <a href="#">
                <img src={assets.play_store} alt="" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"/>
              </a>
              <a href="#">
                <img src={assets.app_store} alt="" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStoreBanner;
