import SectionHead from './SectionHead';
import { FaQuestion } from 'react-icons/fa';
import { faqs } from '../data.js';
import FAQForSingle from './FAQForSingle';

const FAQs = () => {
  return (
    <section className="faqs">
      <div className="container faqs__container">
        <SectionHead icon={<FaQuestion />} title="FAQs" />
        <div className="faqs__wrapper">
          {faqs.map((faq) => {
            const { id, question, answer } = faq;
            return (
              <FAQForSingle key={id} question={question} answer={answer} />
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default FAQs;
