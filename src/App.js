import { Route, Routes } from 'react-router-dom';
import './App.css';

//components
import Articles from './components/Articles';
import ArticleById from './components/ArticleById';
import Users from './components/Users';
import ErrorPage from './components/ErrorPage';
import Home from './components/home';

//MUI styling
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar';

//font family in MUI
const theme = createTheme({
  typography: {
    fontFamily: ['Merriweather', 'Georgia', 'serif'].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <NavBar />
        <Container>
          <Routes>
            <Route path='*' element={<ErrorPage />} />
            <Route path='/' element={<Home />}></Route>
            <Route path='/articles' element={<Articles />}></Route>
            <Route path='/users' element={<Users />}></Route>
            <Route
              path='/articles/:article_id'
              element={<ArticleById />}
            ></Route>
            <Route path='/topics/:topic' element={<Articles />}></Route>
          </Routes>
        </Container>
        <ToastContainer closeOnClick pauseOnHover />
      </div>
    </ThemeProvider>
  );
}

export default App;
