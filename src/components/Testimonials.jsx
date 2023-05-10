import SectionHead from './SectionHead';
import { ImQuotesLeft } from 'react-icons/im';
import Cards from '../UI/Cards';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
import { testimonials } from '../data.js';
import avatar1 from '../images/avatar1.jpg';
import avatar2 from '../images/avatar2.jpg';
import avatar3 from '../images/avatar3.jpg';
import avatar4 from '../images/avatar4.jpg';
import avatar5 from '../images/avatar5.jpg';
import { useState } from 'react';

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const { name, quote, job } = testimonials[index];

  const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

  const prevTestimonialHandler = () => {
    setIndex((prevState) => prevState - 1);

    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };

  const nextTestimonialHandler = () => {
    setIndex((prevState) => prevState + 1);

    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };
  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionHead
          icon={<ImQuotesLeft />}
          title="Testimonials"
          className="testimonials__head"
        />
        <Cards className="testimonial">
          <div className="testimonial__avatar">
            <img src={avatars[index]} alt={name} />
          </div>
          <p className="testimonial__quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial__title">{job}</small>
        </Cards>
        <div className="testimonials__btn-container">
          <button
            className="testimonials__btn"
            onClick={prevTestimonialHandler}
          >
            <IoIosArrowDropleftCircle />
          </button>
          <button
            className="testimonials__btn"
            onClick={nextTestimonialHandler}
          >
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;

// importing all avator one by there is issue in the data.js , will fix it in the future.
