import news from '../assets/news-background.png';
const Home = () => {
  return (
    <div className='home-main'>
      <h1 className='text-title'>Welcome to NC News</h1>
      <p className='text-content'>
        NC News is a Full-Stack Application for news articles. Each article has
        user curated ratings and can be up voted using the API. Users can also
        add comments about an article if they are logged in.
      </p>
      <img src={news} alt='news' className='news-img' />
    </div>
  );
};

export default Home;
