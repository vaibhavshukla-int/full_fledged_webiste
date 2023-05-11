import Cards from '../UI/Cards';

const SingleTrainer = ({ image, name, job, socials }) => {
  return (
    <Cards className="trainer">
      <div className="trainer__img">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{job}</p>
      <div className="trainer__socials">
        {socials.map((social, index) => {
          const { icon, link } = social;
          return (
            <a key={index} href={link} target="_blank" rel="noreffer noopener">
              {icon}
            </a>
          );
        })}
      </div>
    </Cards>
  );
};
export default SingleTrainer;
