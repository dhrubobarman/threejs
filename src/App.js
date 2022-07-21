import './App.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Components from './component/Components';
// import { Html } from '@react-three/drei';
import { Box, Typography } from '@mui/material';
import Loader from './component/Assets/Loader';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './component/Header';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const customStyles = {
  loader: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100vh",
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
}

const LoaderContainer = () => {
  return (
    <ThemeProvider theme={darkTheme}>

      <Box sx={{ ...customStyles.loader }}>
        <Loader sx={{ color: '#121212', width: '20vw', height: '20vw' }} />
        <Typography color="white">Loading Experience...</Typography>
      </Box>
    </ThemeProvider>
  )
}

function App() {
  return (
    <ThemeProvider theme={darkTheme} className="App">
      <Header />

      <Suspense fallback={<LoaderContainer />} >
        <Canvas shadows>
          <Components />
        </Canvas>
      </Suspense>

    </ThemeProvider >
  );
}

export default App;
