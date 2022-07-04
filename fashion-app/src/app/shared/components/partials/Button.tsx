import { IButton } from "../../interfaces/button";

const Button: React.FC<IButton>  = ({ text, type, classCol, className, onClick }) => {
  return (
    <button
      className={`btn btn-${type} ${classCol}${className}`}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
