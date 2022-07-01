import { IButton } from "../../interfaces/button";

const Button = ({ text, type, classCol, onClick }: IButton) => {
  return (
    <button className={`btn btn-${type} ${classCol}`} onClick={onClick}>{text}</button>
  );
};

export default Button;
