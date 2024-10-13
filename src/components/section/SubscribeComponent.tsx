import { CallToActionProps } from "../../types";
import bgImage from "../../assets/images/Pattern.png";
import ButtonComponent from "../common/ButtonComponent";

const SubscribeComponent = ({
  firstTitle,
  secondTitle,
  firstDescription,
  buttonAction,
}: CallToActionProps) => {
  return (
    <section
      id="subscribe"
      className="relative flex items-center justify-center h-auto py-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      <div className="relative z-10 flex flex-col md:flex-row lg:flex-row items-center justify-between w-full max-w-6xl px-4 gap-4 md:gap-6 lg:gap-6">
        <div className="w-full md:w-1/2 lg:w-1/2 h-64 md:h-72 lg:h-80">
          <img
            src={require("../../assets/images/subscribe.png")}
            alt="subscribe"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 px-8 md:px-0 lg:px-0">
          <h2 className="text-white text-2xl lg:text-3xl">
            {firstTitle} <span className="text-yellow-400">{secondTitle}</span>
          </h2>
          <p className="text-white text-xs md:text-sm lg:text-sm mt-2 mb-4 max-w-md">
            {firstDescription}
          </p>
          <div>
            <ButtonComponent
              text="Subscribe Now"
              onClick={buttonAction}
              fill={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeComponent;
