import OtherPageHeader from '../../components/OtherPageHeader';
import TrainerHeaderImage from '../../images/header_bg_5.jpg';
import { trainers } from '../../data';
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import Trainer1 from '../../images/trainer1.jpg';
import Trainer2 from '../../images/trainer2.jpg';
import Trainer3 from '../../images/trainer3.jpg';
import Trainer4 from '../../images/trainer4.jpg';
import Trainer5 from '../../images/trainer5.jpg';
import Trainer6 from '../../images/trainer6.jpg';
import './trainers.css';
import SingleTrainer from '../../components/SingleTrainer';

const Trainers = () => {
  const TrainerImage = [
    Trainer1,
    Trainer2,
    Trainer3,
    Trainer4,
    Trainer5,
    Trainer6,
  ];
  return (
    <>
      <OtherPageHeader title="Our Trainers" image={TrainerHeaderImage}>
        Lorem cillum occaecat est velit proident laborum tempor voluptate
        temporelit aliquip dolore aliquip.Aliquip tempor eu elit aute labore
        mollit.
      </OtherPageHeader>

      <section className="trainers">
        <div className="container trainers__container">
          {trainers.map((trainer, index) => {
            const { id, name, job, socials } = trainer;
            return (
              <SingleTrainer
                key={id}
                image={TrainerImage[index]}
                job={job}
                name={name}
                socials={[
                  { icon: <AiFillInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebookF />, link: socials[2] },
                  { icon: <FaLinkedinIn />, link: socials[3] },
                ]}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Trainers;
