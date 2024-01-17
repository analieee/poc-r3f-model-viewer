import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CharacterPage, HomePage } from './components';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:characterName" element={<CharacterPage />} />
      </Routes>
    </Router>
  );
};

