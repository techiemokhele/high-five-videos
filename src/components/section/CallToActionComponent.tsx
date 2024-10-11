import { CallToActionProps } from "../../types";
import ButtonComponent from "../common/ButtonComponent";

import ctaImage from "../../assets/images/cta.png";

const CallToActionComponent = ({
  firstTitle,
  secondTitle,
  firstDescription,
  secondDescription,
  buttonAction,
}: CallToActionProps) => {
  return (
    <section
      id="#callToAction"
      className="relative flex flex-col items-center justify-center py-12 min-h-[250px] md:min-h-[320px] bg-cover lg:bg-stretch bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${ctaImage})` }}
    >
      <div className="absolute inset-0  flex flex-col items-center justify-center gap-4 sm:gap-6">
        <h1 className="text-white text-2xl lg:text-3xl text-center">
          {firstTitle} <span className="text-gold-1">{secondTitle}</span>
        </h1>
        <div className="flex flex-col gap-1 px-4 md:px-10 lg:px-16 text-white text-xs sm:text-sm text-center">
          <p>{firstDescription}</p>
          <p>{secondDescription}</p>
        </div>
        <ButtonComponent
          text="Explore Now"
          onClick={buttonAction}
          fill={true}
        />
      </div>
    </section>
  );
};

export default CallToActionComponent;
