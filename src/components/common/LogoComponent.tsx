import { LogoProps } from "../../types";

const LogoComponent = ({ half = false }: LogoProps) => {
  return (
    <div className="flex flex-col items-center cursor-pointer">
      <h1 className="text-white font-thin lg:text-2xl text-lg ml-2 flex items-center">
        <span className="font-bold">HI</span>GH FI
        <span className="font-bold">VE</span>
      </h1>
      <div
        className={`flex border-b-[1px] justify-center items-center ${
          half ? "w-[98%] ml-2" : "w-full ml-1"
        }`}
      ></div>
      <p className="text-white font-thin text-xs uppercase leading-3 pt-2">
        V i d e o s
      </p>
    </div>
  );
};

export default LogoComponent;
