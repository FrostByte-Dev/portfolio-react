import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TopBar from './components/TopBar';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <TopBar />
      <Container maxWidth="sm">
        <Box sx={{ my: 4}}>
          <Typography variant="h4" component="h1" gutterBottom>
            Material UI Vite.js example in Typescript
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default App
