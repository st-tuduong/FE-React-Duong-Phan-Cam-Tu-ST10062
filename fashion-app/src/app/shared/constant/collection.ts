import Image from "../../../assets/images";

const collections = [
  {
    id: 1,
    classCol: "col-6 col-sm-12",
    img: Image.CollectionNew,
    alt: "New arrivalsare now in!",
    discount: 0,
    title: "New arrivalsare now in!",
    textBtn: "SHOW COLLECTION",
  },
  {
    id: 2,
    classCol: "col-3 col-sm-6",
    img: Image.CollectionBasic,
    alt: "Basic t-shirts $29,99",
    discount: 0,
    title: "Basic t-shirts $29,99",
    textBtn: "MORE DETAILS",
  },
  {
    id: 3,
    classCol: "col-3 col-sm-6",
    img: Image.CollectionSale,
    alt: "Sale this summer",
    discount: 50,
    title: "Sale this summer",
    textBtn: "VIEW ALL",
  },
];

export default collections;
