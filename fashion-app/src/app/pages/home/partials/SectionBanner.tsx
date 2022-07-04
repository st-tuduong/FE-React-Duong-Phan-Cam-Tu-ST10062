import CampaignItem from "./CampaignItem";
import { ICampaign } from "../../../shared/interfaces/campaign";
import Icon from "../../../../assets/icon";

interface ICampaignListProps {
  campaigns: ICampaign[];
}
const Banner = ({ campaigns }: ICampaignListProps) => {
  return (
    <section className="section-banner">
      <div className="container">
        <div className="banner-inner">
          <div className="banner-content">
            <h2>
              Sale of the
              <span>summer</span>
              collection
            </h2>
            <a href="#" className="banner-link">
              <img src={Icon.Arrow} className="icon-arrow" alt="Shop Now" />
              <span>Shop Now</span>
            </a>
          </div>
        </div>
      </div>
      <div className="banner-campaign">
        <ul className="campaign-list row">
          {campaigns.map((campaign) => {
            return (
              <CampaignItem
                img={campaign.img}
                alt={campaign.alt}
                title={campaign.title}
                text={campaign.text}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Banner;
