import { FaCheck } from "react-icons/fa6";

import bgImage from "../../assets/images/Pattern.png";
import { benefitData, optionData } from "../../data/infoData";
import TextInputComponent from "../common/TextInputComponent";

const TopLandingComponent = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat flex items-center justify-center h-auto py-2 md:py-12 lg:py-12"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      <div className="relative z-10 flex flex-col md:flex-row lg:flex-row justify-between w-full max-w-6xl gap-[44px] md:gap-6 lg:gap-6">
        <div className="flex flex-col items-center md:items-start lg:items-start w-full md:w-1/2 lg:w-1/2">
          <div className="flex flex-col text-2xl lg:text-3xl text-center md:text-start lg:text-start">
            <h2 className="text-gray-1">Your Ultimate</h2>
            <h2 className="text-gray-1">Destination for</h2>
            <h2 className="text-gold-1">High-Quality Edits</h2>
          </div>

          <div className="flex flex-row gap-2 pt-4">
            {benefitData.map((benefit) => (
              <div
                key={benefit}
                className="flex flex-row gap-2 items-center text-white text-sm"
              >
                <FaCheck color="#fff" size={16} />
                <p className="underline">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-6">
            <div>
              <TextInputComponent />
            </div>

            <div className="flex flex-row gap-2 md:gap-2 lg:gap-2 pt-4">
              {optionData.map((option) => (
                <div
                  key={option}
                  className="flex items-center justify-center text-white font-thin text-xs md:text-sm lg:text-sm bg-gray-2 hover:bg-gray-1 rounded-md px-2 md:px-4 lg:px-2 py-2 cursor-pointer"
                >
                  <p>{option}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 h-64 md:h-72 lg:h-80 pb-8 md:pb-0 lg:pb-0">
          <img
            src={require("../../assets/images/hero.png")}
            alt="hero"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default TopLandingComponent;
