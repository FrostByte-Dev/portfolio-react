import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TopBar from './components/TopBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Box>
      <Container maxWidth="lg">
        <TopBar />
        <Outlet />
      </Container>
    </Box>
  );
}

export default App
