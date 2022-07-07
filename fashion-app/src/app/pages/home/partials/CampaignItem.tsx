import { ICampaign } from '../../../shared/interfaces/campaign';

const CampaignItem = ({ img, alt, title, text }: ICampaign) => {
  return (
    <>
      <li key={title} className="campaign-item col-4">
        <img src={img} alt={alt} />
        <div className="campaign-content">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </li>
    </>
  );
};

export default CampaignItem;
