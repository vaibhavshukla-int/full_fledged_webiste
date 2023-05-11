import OtherPageHeader from '../../components/OtherPageHeader';
import PlansHeaderImage from '../../images/header_bg_4.jpg';
import Cards from '../../UI/Cards';
import { plans } from '../../data';
import './plans.css';

const Plans = () => {
  return (
    <>
      <OtherPageHeader title="Membership Plans" image={PlansHeaderImage}>
        Cupidatat eiusmod eiusmod ullamco occaecat mollit magna aute
        sit.Pariatur ea esse esse ad sit amet.
      </OtherPageHeader>

      <section className="plans">
        <div className="container plans__container">
          {plans.map((plan) => {
            const { id, name, desc, price, features } = plan;
            return (
              <Cards key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1>
                <h2>/mo</h2>
                <h4>Features</h4>
                {features.map((fea, index) => {
                  const { feature, available } = fea;
                  return (
                    <p key={index} className={!available ? 'disabled' : ''}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn lg">Choose Plan</button>
              </Cards>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
