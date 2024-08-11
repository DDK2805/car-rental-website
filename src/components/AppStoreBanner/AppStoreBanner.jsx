import React from "react";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import pattern from "../../assets/website/pattern.jpeg";

const bannerImg = {
  backgroundImage: `url(${pattern})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppStoreBanner = () => {
  return (
    <div className="container">
      <div
        className="text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl"
        style={bannerImg}
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <h1
              data-aos="fade-up"
              className="text-2xl text-center sm:text-4xl font-semibold font-serif"
            >
              Download Our App Now!
            </h1>
            <p data-aos="fade-up" className="text-center sm:px-20">
              Experience the best car rental service at your fingertips. Join us today!
            </p>
            <div
              data-aos="fade-up"
              className="flex flex-wrap justify-center items-center gap-4"
            >
              <a href="#">
                <img
                  src={PlayStoreImg}
                  alt="Download on Play Store"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
              <a href="#">
                <img
                  src={AppStoreImg}
                  alt="Download on App Store"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStoreBanner;
