import { Route, Routes } from 'react-router-dom';
import './App.css';

//components
import Articles from './components/Articles';
import Header from './components/Header';
import ArticleById from './components/ArticleById';
import Users from './components/Users';
import ErrorPage from './components/ErrorPage';

//MUI styling
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@mui/material';

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
        <Header />
        <Container>
          <Routes>
            <Route path='*' element={<ErrorPage />} />
            <Route path='/' element={<Users />}></Route>
            <Route path='/articles' element={<Articles />}></Route>
            <Route
              path='/articles/:article_id'
              element={<ArticleById />}
            ></Route>
            <Route path='/topics/:topic' element={<Articles />}></Route>
          </Routes>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
