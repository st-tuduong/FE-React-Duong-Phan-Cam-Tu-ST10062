import { IHeading } from "../../interfaces/heading";

const TitleProduct = ({ title, hasButton }: IHeading) => {
  return (
    <div className="section-title">
      <h3>{title}</h3>
      {hasButton && (
        <a href="#" className="btn btn-secondary">
          Show More
        </a>
      )}
    </div>
  );
};

export default TitleProduct;
