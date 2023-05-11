import OtherPageHeader from '../../components/OtherPageHeader';
import ContactHeaderImage from '../../images/header_bg_2.jpg';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import './contact.css';

const Contact = () => {
  return (
    <>
      <OtherPageHeader title="Get In Touch" image={ContactHeaderImage}>
        Ex voluptate do ad proident qui.Ullamco enim pariatur anim dolore veniam
        sint occaecat incididunt voluptate velit laboris.Aliquip quis quis
        fugiat anim mollit cillum irure sunt irure duis commodo aute
        consectetur.
      </OtherPageHeader>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:vaibhavshukla878@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </a>
            <a
              href="https://about.instagram.com/features/direct"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsMessenger />
            </a>
            <a
              href="https://wa.me/+916263371992"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
