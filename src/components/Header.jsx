import NavBar from './NavBar';
import { Toolbar, AppBar, Box } from '@mui/material';

const Header = () => {
  return (
    <header className='news-header'>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' style={{ backgroundColor: '#9EABB1' }}>
          <Toolbar>
            <NavBar />
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};
export default Header;
