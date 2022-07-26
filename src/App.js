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
    flexDirection: 'column',
    backgroundColor: 'rgb(26, 32, 39)'
  }
}

const LoaderContainer = () => {
  return (
    <ThemeProvider theme={darkTheme}>

      <Box sx={{ ...customStyles.loader }}>
        <Loader sx={{ color: '#1e1e1e', width: '20vw', height: '20vw' }} />
        <Typography mt={2} color="white">Loading Please Wait.🏎️🚨...</Typography>
      </Box>
    </ThemeProvider>
  )
}

function App() {
  return (
    <ThemeProvider theme={darkTheme} className="App">
      <Header />

      <Suspense fallback={<LoaderContainer />} >
        <Canvas shadows frameloop="demand">
          <Components />
        </Canvas>
      </Suspense>
      {/* <LoaderContainer /> */}
    </ThemeProvider >
  );
}

export default App;
