import { useParams } from 'react-router-dom';
import { Scene } from './Scene';

type CharacterPageParams = {
  characterName: string;
};

export function CharacterPage() {
  const { characterName } = useParams<CharacterPageParams>();

  return (
    <Scene characterName={characterName ? characterName : "spiderman"} />
  );
}
