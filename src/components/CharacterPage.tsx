import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Character } from './Character';
import { Loader } from './Loader';

const validModels = ['spiderman', 'ironman', 'deadpool', 'hulk']; // Define valid model names

export function CharacterPage() {
  const [characterName, setCharacterName] = useState<string>('defaultCharacter');
  const [isValidScene, setIsValidScene] = useState<boolean>(true);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const scene = searchParams.get('scene');
    const model = searchParams.get('model');

    if (scene === 'viewer' && model && validModels.includes(model)) {
      setCharacterName(model);
    } else {
      setIsValidScene(false);
    }
  }, []);

  if (!isValidScene) {
    return <div>404 Page Not Found</div>; // Render a 404 page or component here
  }

  return (
    <Canvas shadows camera={{ position: [5, 0, 10], fov: 30 }}>
      <color attach="background" args={["#ADDFFF"]} />
      <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      <ambientLight intensity={3.0} />

      <Suspense fallback={<Loader />}>
        <Character characterName={characterName} />
      </Suspense>

      <OrbitControls autoRotate autoRotateSpeed={0.05} enableZoom={false} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />

      <Environment preset="city" />
    </Canvas>
  );
}
