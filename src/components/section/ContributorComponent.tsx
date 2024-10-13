import { CallToActionProps } from "../../types";
import bgImage from "../../assets/images/Pattern.png";
import ButtonComponent from "../common/ButtonComponent";

const ContributorComponent = ({
  firstTitle,
  firstSubTitle,
  secondTitle,
  secondSubTitle,
  firstDescription,
  buttonAction,
}: CallToActionProps) => {
  return (
    <div
      className="relative flex items-center justify-center h-auto py-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      <div className=" mx-12 relative z-10 p-6 flex flex-col md:flex-row lg:flex-row items-center justify-between w-full max-w-6xl gap-4 md:gap-6 lg:gap-6 bg-gradient-to-r from-gradient-4 via-gradient-2 to-gradient-3 rounded-lg bg-opacity-50 border-[0.5px] border-gray-2">
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/2">
          <h2 className="text-white text-2xl lg:text-3xl">
            {firstTitle}{" "}
            <span className="text-yellow-400">{firstSubTitle}</span>
          </h2>
          <h2 className="text-white text-2xl lg:text-3xl">
            {secondTitle}{" "}
            <span className="text-yellow-400">{secondSubTitle}</span>
          </h2>

          <p className="text-white text-xs md:text-sm lg:text-sm mt-2 mb-4 max-w-md">
            {firstDescription}
          </p>
          <div>
            <ButtonComponent
              text="Become a Contributor"
              onClick={buttonAction}
              fill={true}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 h-64 md:h-72 lg:h-80 p-[1px] rounded-lg">
          <img
            src={require("../../assets/images/contributor.png")}
            alt="contributor"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContributorComponent;
