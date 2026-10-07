import React from "react";
import heroImg from "../../assets/flora-mobile.png";

const HeroSection = () => {
  return (
    <section className="flex px-6 min-h-[80vh] items-center justify-around">
      <div className="max-w-[500px]">
        <h1 className="text-6xl font-bold leading-16">
          Manage your finance easily with Flora.
        </h1>
        <p className="my-8 ">
          Carry your bank in your pocket with the easiest and most secure mobile
          banking app You’ll.
        </p>

        <div className="hero-btns flex gap-3">
          <button className="flex items-center gap-4 bg-black text-white py-3 px-6 rounded-full">
            Download on the <span className="block">App Store</span>
          </button>
          <button className="flex items-center gap-4 bg-black text-white py-3 px-6 rounded-full">
            Get it on <span>Google Play</span>
          </button>
        </div>
      </div>

      <div>
        <img src={heroImg} alt="" className="w-[300px]" />
      </div>
    </section>
  );
};

export default HeroSection;
