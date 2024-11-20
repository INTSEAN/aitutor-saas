import './Pricing.css';

function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <h2>Pricing Plans</h2>
      <p>Choose a plan that suits you best!</p>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Basic Plan</h3>
          <p className="price">$10/month</p>
          <ul>
            <li>Access to basic features</li>
            <li>Email support</li>
          </ul>
          <button className="purchase-button">Select Plan</button>
        </div>
        <div className="pricing-card">
          <h3>Pro Plan</h3>
          <p className="price">$20/month</p>
          <ul>
            <li>All Basic features</li>
            <li>Priority support</li>
            <li>Advanced analytics</li>
          </ul>
          <button className="purchase-button">Select Plan</button>
        </div>
        <div className="pricing-card">
          <h3>Enterprise Plan</h3>
          <p className="price">$50/month</p>
          <ul>
            <li>All Pro features</li>
            <li>Dedicated support</li>
            <li>Custom integrations</li>
          </ul>
          <button className="purchase-button">Select Plan</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing; 