import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import { Sky } from '@react-three/drei'
import { Ground } from './components/Ground'

function App() {

  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.8} />
        <Physics>
          <Ground />
        </Physics>
      </Canvas>
    </>
  )
}

export default App
