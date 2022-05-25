import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='news-header'>
      <Link to='/articles'>
        <h1 className='card-title'>NC News</h1>
      </Link>
    </header>
  );
};
export default Header;
