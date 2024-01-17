import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Character } from './Character';
import { Loader } from './Loader';

type CharacterPageParams = {
  characterName: string;
};

export function Scene({ characterName }: CharacterPageParams) {
  return (
    <Canvas shadows camera={{ position: [5, 0, 10], fov: 30 }}>
      <color attach="background" args={["#ADDFFF"]} />
      <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      <ambientLight intensity={3.0} />

      <Suspense fallback={<Loader/>}>
        <Character characterName={characterName} />
      </Suspense>

      <OrbitControls autoRotate autoRotateSpeed={0.05} enableZoom={false} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />

      {/* Renders contents "live" into a HDRI environment (scene.environment). */}
      <Environment preset="city" />
    </Canvas>
  )
}
