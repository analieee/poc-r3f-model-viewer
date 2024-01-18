import { CharacterPage } from './components';

export default function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/character/:characterName" element={<CharacterPage />} />
    //   </Routes>
    // </Router>
    
    <>
      {/** Parsing url for scene and model parameter */}
      <CharacterPage />
    </>
  );
};

