import './App.css';

import Header from './components/Header';
import LogsCard from './components/LogsCard';
import SavedPhrasesCard from './components/SavedPhrasesCard';
import TranslationCard from './components/TranslationCard';

function App() {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <TranslationCard />
        </div>
        <div style={{ flex: 1 }}>
          <SavedPhrasesCard />
        </div>
      </div>
      <LogsCard />
    </div>
  );
}

export default App;
