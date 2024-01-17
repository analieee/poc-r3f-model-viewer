import { useGLTF } from '@react-three/drei';

type CharacterPageParams = {
  characterName: string;
};

export function Character({ characterName }: CharacterPageParams) {
  const { scene } = useGLTF(`/models/characters/${characterName}.glb`)

  return <primitive object={scene} scale={0.09} position={[0, -2, 0]} receiveShadow castShadow />

}
