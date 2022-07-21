import './App.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Car from './component/Car';
// import { Html } from '@react-three/drei';

function App() {
  return (
    <div className="App">

      <Suspense fallback={null}>
        <Canvas shadows>
          <Car />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
