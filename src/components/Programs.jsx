import { FaCrown } from 'react-icons/fa';
import SectionHead from './SectionHead';
import { programs } from '../data.js';
import Cards from '../UI/Cards';
import { SiOpenaigym } from 'react-icons/si';
import { AiFillCaretRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead icon={<FaCrown />} title="Programs" />

        <div className="programs__wrapper">
          {programs.map((program) => {
            const { id, title, info, path } = program;
            return (
              <Cards className="programs__program" key={id}>
                <span>{<SiOpenaigym />}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link path={path} className="btn sm">
                  Learn More <AiFillCaretRight />
                </Link>
              </Cards>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Programs;
