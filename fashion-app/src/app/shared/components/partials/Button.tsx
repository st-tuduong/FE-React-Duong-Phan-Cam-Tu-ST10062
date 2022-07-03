import { IButton } from "../../interfaces/button";

const Button = ({ text, type, classCol, className, onClick }: IButton) => {
  return (
    <button
      className={`btn btn-${type} ${classCol}${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
