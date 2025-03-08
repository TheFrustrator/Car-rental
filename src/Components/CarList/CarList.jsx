import React from "react";
import { CarListData } from "../../assets/assets";

const CarList = () => {
  return (
    <div className="pb-24 bg-white dark:bg-dark dark:text-white">
      <div className="container pt-10">
        {/* heading  */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Lorem, ipsum dolor.
        </h1>
        <p data-aos="fade-up" className="text-sm pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          blanditiis totam autem.
        </p>
        {/* car listing cards  */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {
              // car listing card
              CarListData.map((data) => {
                return (
                  <div data-aos="fade-up" data-aos-Delay={data.aosDelay} className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group">
                    <div className="w-full h-[120px]">
                      <img className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700" src={data.img} alt="" />
                    </div>
                    <div className="space-y-2">
                      <h1 className="text-primary font-semibold ">{data.name}</h1>
                      <div className="flex justify-between items-center text-xl font-semibold">
                        <p>${data.price}/Day</p>
                        <a href="#">Details</a>
                      </div>
                    </div>
                    <p className="text-xl font-semibold absolute top-0 left-3">
                      12km
                    </p>
                  </div>
                );
              })
            }
          </div>
        </div>
        <div className="grid place-content-center mt-8">
        <button data-aos="fade-up" className="button-outline">Get Startted</button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
