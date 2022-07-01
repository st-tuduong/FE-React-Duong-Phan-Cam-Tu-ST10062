import { ICollection } from "../../../shared/interfaces/collection";
import CollectionItem from "./CollectionItem";

interface ICollectionListProp {
  collections: ICollection[];
}

const CollectionList = ({ collections }: ICollectionListProp) => {
  return (
    <section className="section-collection">
      <div className="container">
        <ul className="collection-list row">
          {collections.map((collection) => {
            return (
              <CollectionItem
                classCol={collection.classCol}
                img={collection.img}
                alt={collection.alt}
                discount={collection.discount}
                title={collection.title}
                textBtn={collection.textBtn}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default CollectionList;
