import Image from '../images/values.jpg';
import SectionHead from './SectionHead';
import { GiCutDiamond } from 'react-icons/gi';
import { values } from '../data';
import Cards from '../UI/Cards';
import { SiOpenaigym } from 'react-icons/si';

const Values = () => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={Image} alt="Values Image" />
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond />} title="Values" />
          <p>
            Eu mollit enim cillum do laborum dolore.Sint est duis deserunt
            labore id ut do ullamco nisi voluptate.
          </p>
          <div className="values__wrapper">
            {values.map((value) => {
              const { id, title, desc } = value;
              return (
                <Cards key={id} className="values__value">
                  <span>{<SiOpenaigym />}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Cards>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
