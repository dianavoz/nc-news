import { Link } from 'react-router-dom';

const ErrorPage = ({ error }) => {
  if (error === undefined) {
    return (
      <div className='card-error'>
        <h1 style={{ color: 'red', fontSize: 100 }}>404</h1>
        <h3>Page Not Found</h3>
        <p>
          <Link to='/articles'>All Article</Link>
        </p>
      </div>
    );
  } else if (error.response.status === 404 || error.response.status === 400) {
    return <h3 className='card-error'>{error.response.data.msg}</h3>;
  } else {
    return (
      <div className='card-error'>
        <h3>Something went wrong !</h3>
        console.log(error)
      </div>
    );
  }
};

export default ErrorPage;
