import pageWithNav from "../tempalates/navbarWrapper/navbarWrapper";
import { Link } from "react-router-dom";
import cardData from "./data";
import "./pricing.css";

function Pricing() {
  return (
    <main className="pricing-page">
      <section className="pricing-intro" aria-labelledby="pricing-heading">
        <p className="pricing-eyebrow">DJ BEAT · EVENT PACKAGES</p>
        <h2 id="pricing-heading">Find the right package for your event</h2>
        <p>Compare the options below and choose the setup that fits your celebration.</p>
        <p className="pricing-note">Higher packages include features from the previous tiers.</p>
      </section>

      <section className="pricing-grid" aria-label="DJ Beat packages">
        {cardData.map((card) => (
          <article className={`pricing-card${card.featured ? " pricing-card-featured" : ""}`} key={card.id}>
            <div className="pricing-card-heading">
              <div>
                <p className="pricing-plan-label">{card.artist}</p>
                <h3>{card.plan}</h3>
              </div>
              <p className="pricing-amount">{card.amount}</p>
            </div>
            <div className="pricing-divider" />
            <p className="pricing-includes">Package includes</p>
            <ul className="pricing-features">
              {card.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <Link className="pricing-cta" to="/contact" aria-label={`Ask about the ${card.plan} package`}>
              Ask about this package <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </section>

      <p className="pricing-footnote">Prices and package details can be confirmed when you get in touch.</p>
    </main>
  );
}

export default pageWithNav(Pricing);
