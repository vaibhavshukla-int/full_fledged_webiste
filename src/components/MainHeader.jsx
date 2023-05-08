import { Link } from 'react-router-dom';
import Image from '../images/main_header.png';
import '../pages/home/home.css';

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join the Legends of The Fitness World</h1>
          <p>
            loremOfficia dolor enim velit labore do sint do ipsum duis
            id.loremOccaecat ullamco sunt laboris sint eiusmod nisi occaecat.
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default MainHeader;
