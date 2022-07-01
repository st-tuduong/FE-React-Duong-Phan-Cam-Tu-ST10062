import Link from "../../../shared/components/partials/Link";
import { ICollection } from "../../../shared/interfaces/collection";

const CollectionItem = ({
  classCol,
  img,
  alt,
  title,
  textBtn,
  discount,
}: ICollection) => {
  return (
    <li className={classCol}>
      <div className="collection-item">
        <img src={img} alt="New arrivalsare now in!" />
        <div className="collection-content">
          {discount !== 0 && (
            <span className="badge badge-danger badge-collection">
              -{discount}%
            </span>
          )}
          <h4>{title}</h4>
          <Link text={textBtn} type="secondary"/>
        </div>
      </div>
    </li>
  );
};

export default CollectionItem;
