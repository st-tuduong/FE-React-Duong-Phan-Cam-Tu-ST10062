import { IButton } from "../interfaces/button";

const Button = ({ text, type }: IButton) => {
  return (
    <a href="#" className={`btn btn-${type}`}>
      {text}
    </a>
  );
};

export default Button;
