import './App.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Components from './component/Components';
// import { Html } from '@react-three/drei';

function App() {
  return (
    <div className="App">

      <Suspense fallback={null}>
        <Canvas shadows>
          <Components />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
