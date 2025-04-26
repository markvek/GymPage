import { BrowserRouter as Router } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import Values from './components/home/Values';
import FeaturedClass from './components/home/FeaturedClass';
import BusinessInfo from './components/home/BusinessInfo';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthXl: {
          '@media (min-width: 1920px)': {
            maxWidth: '1920px',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          width: '100vw',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <Navbar />
          <Hero />
          <Values />
          <FeaturedClass />
          <BusinessInfo />
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
