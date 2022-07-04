import { IButton } from "../../interfaces/button";

const Button: React.FC<IButton>  = ({ type, classCol, classButton, onClick, text }) => {
  return (
    <button
      className={`btn btn-${type} ${classCol} ${classButton}`}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
