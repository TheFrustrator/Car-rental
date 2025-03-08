import React from "react";
import { TestimonialData } from "../../assets/assets";

const Testimonials = () => {
  return (
    <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
      <div className="container">
        {/* header section  */}
        <div className="space-y-4 pb-12">
          <p
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl font-serif"
          >
            what Our clients Say about us
          </p>
          <p data-aos="fade-up" className="text-center sm:px-44">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
            aperiam magni praesentium beatae quis?
          </p>
        </div>
        {/* card section  */}
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 text-black dark:text-white">
          {TestimonialData.map((data) => {
            return (
              <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className="card text-center text-black/80 dark:text-white group space-y-3 sm:space-y-6 p-4 bg-gray-100 dark:bg-white/20 sm:py-12 duration-300 rounded-lg">
                <div className="grid place-items-center">
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="h-20 w-20 rounded-full"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p className="font-semibold text-center">{data.description}</p>
                <p className="font-bold text-center">{data.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
