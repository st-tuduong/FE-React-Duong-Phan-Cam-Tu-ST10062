import { IHeading } from "../../interfaces/heading";
import Link from "./Link";

const TitleProduct = ({ title, hasButton }: IHeading) => {
  return (
    <div className={!hasButton ? "section-title title-center" : "section-title"}>
      <h3>{title}</h3>
      {hasButton && <Link type="secondary" text="Show More" />}
    </div>
  );
};

export default TitleProduct;
