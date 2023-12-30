import './App.css';

import Header from './components/Header';
import SavedPhrasesCard from './components/SavedPhrasesCard';
import TranslationCard from './components/TranslationCard';

function App() {
  return (
    <div>
      <Header />
      <TranslationCard />
      <SavedPhrasesCard />
    </div>
  );
}

export default App;
