import { ILink } from "../../interfaces/link";

const Link = ({text, type}: ILink) => {
  return ( 
    <a href="#" className={`btn btn-${type}`}>
      {text}
    </a>
   );
}

export default Link;