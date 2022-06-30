import Image from "../../../asset/images";

function Collection() {
  return (
    <section className="section-collection">
      <div className="container">
        <ul className="collection-list row">
          <li className="col-6 col-sm-12">
            <div className="collection-item">
              <img src={Image.CollectionNew} alt="New arrivalsare now in!" />
              <div className="collection-content">
                <h4>New arrivalsare now in!</h4>
                <a href="#" className="btn btn-secondary">
                  SHOW COLLECTION
                </a>
              </div>
            </div>
          </li>
          <li className="col-3 col-sm-6">
            <div className="collection-item collection-item2">
              <img src={Image.CollectionBasic} alt="Basic t-shirts $29,99" />
              <div className="collection-content">
                <h4>Basic t-shirts $29,99</h4>
                <a href="#" className="btn btn-secondary">
                  MORE DETAILS
                </a>
              </div>
            </div>
          </li>
          <li className="col-3 col-sm-6">
            <div className="collection-item collection-item3">
              <img src={Image.CollectionSale} alt="Sale this summer" />
              <div className="collection-content">
                <span className="badge badge-danger badge-collection">
                  -50%
                </span>
                <h4>Sale this summer</h4>
                <a href="#" className="btn btn-secondary">
                  VIEW ALL
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Collection;
