import { IButton } from "../../interfaces/button";

const Button = ({ text, type, classCol }: IButton) => {
  return (
    <button className={`btn btn-${type} ${classCol}`}>{text}</button>
  );
};

export default Button;
