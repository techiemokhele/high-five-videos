import { ButtonProps } from "../../types";

const ButtonComponent = ({ text, onClick, fill }: ButtonProps) => {
  return (

      <button
        onClick={onClick}
        className={`py-2 px-4 rounded-md font-normal text-sm ${
          fill
            ? "bg-gold-1 text-gold-2"
            : "bg-transparent text-white border border-gray-1 hover:bg-yellow-400 hover:text-gold-2"
        }`}
      >
        {text}
      </button>
  );
};

export default ButtonComponent;
