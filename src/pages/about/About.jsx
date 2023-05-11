import OtherPageHeader from '../../components/OtherPageHeader';
import HeaderImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';
import './about.css';

const About = () => {
  return (
    <>
      <OtherPageHeader title="About Us" image={HeaderImage}>
        Quis esse proident do elit mollit. Ullamco aliquip aliqua eiusmod magna
        dolor officia minim aute id exercitation sunt incididunt sit. Ex et
        nisicommodo pariatur aliqua sunt sunt.
      </OtherPageHeader>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Qui occaecat sit duis aute officia anim dolore incididunt dolore.
              Dolor fugiat nisi nisi reprehenderit duis. In et ad do ut eu
              nostrud sit commodo sunt. Consequat proident minim quis esse
              proident ea sunt ut fugiat aliqua proident sit deserunt aliquip.
              Ipsum ut fugiat ullamco magna ad excepteur id voluptate. Tempor
              excepteur nostrud laborum ex tempor culpa.
            </p>
            <p>
              Fugiat sint dolor culpa exercitation ut ut ullamco. Veniam
              consequat veniam aute in fugiat magna voluptate exercitation
              aliqua voluptate eu labore ullamco ut. Consequat officia elit
              dolore aliqua. Et irure excepteur fugiat aliquip ipsum
              reprehenderit voluptate magna excepteur eiusmod velit. Aliquip
              consequat dolor aliquip ut eu ad mollit.
            </p>
            <p>
              Et irure excepteur fugiat aliquip ipsum reprehenderit voluptate
              magna excepteur eiusmod velit.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Qui occaecat sit duis aute officia anim dolore incididunt dolore.
              Dolor fugiat nisi nisi reprehenderit duis. In et ad do ut eu
              nostrud sit commodo sunt. Consequat proident minim quis esse
              proident ea sunt ut fugiat aliqua proident sit deserunt aliquip.
              Ipsum ut fugiat ullamco magna ad excepteur id voluptate. Tempor
              excepteur nostrud laborum ex tempor culpa.
            </p>
            <p>
              Fugiat sint dolor culpa exercitation ut ut ullamco. Veniam
              consequat veniam aute in fugiat magna voluptate exercitation
              aliqua voluptate eu labore ullamco ut. Consequat officia elit
              dolore aliqua. Et irure excepteur fugiat aliquip ipsum
              reprehenderit voluptate magna excepteur eiusmod velit. Aliquip
              consequat dolor aliquip ut eu ad mollit.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Qui occaecat sit duis aute officia anim dolore incididunt dolore.
              Dolor fugiat nisi nisi reprehenderit duis. In et ad do ut eu
              nostrud sit commodo sunt. Consequat proident minim quis esse
              proident ea sunt ut fugiat aliqua proident sit deserunt aliquip.
              Ipsum ut fugiat ullamco magna ad excepteur id voluptate. Tempor
              excepteur nostrud laborum ex tempor culpa.
            </p>
            <p>
              Fugiat sint dolor culpa exercitation ut ut ullamco. Veniam
              consequat veniam aute in fugiat magna voluptate exercitation
              aliqua voluptate eu labore ullamco ut. Consequat officia elit
              dolore aliqua. Et irure excepteur fugiat aliquip ipsum
              reprehenderit voluptate magna excepteur eiusmod velit. Aliquip
              consequat dolor aliquip ut eu ad mollit.
            </p>
            <p>
              Et irure excepteur fugiat aliquip ipsum reprehenderit voluptate
              magna excepteur eiusmod velit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
