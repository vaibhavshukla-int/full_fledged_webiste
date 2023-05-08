import { FaCrown } from 'react-icons/fa';
import SectionHead from './SectionHead';
import { programs } from '../data';
import Cards from '../UI/Cards';
import { SiOpenaigym } from 'react-icons/si';
import { AiFillCaretRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Programs = () => {
  console.log(programs);
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead icon={<FaCrown />} title="Programs" />
      </div>
      <div className="programs__wrapper">
        {programs.map((program) => {
          const { id, icon, title, info, path } = program;
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
    </section>
  );
};
export default Programs;
