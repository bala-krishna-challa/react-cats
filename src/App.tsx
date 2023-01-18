import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';
import Header from './layouts/Header';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Box>
          <Outlet />
        </Box>
      </Container>
    </>
  );
}

export default App;
