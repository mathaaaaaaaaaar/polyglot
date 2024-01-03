import './App.css';

import Header from './components/Header';
import LogsCard from './components/LogsCard';
import SavedPhrasesCard from './components/SavedPhrasesCard';
import TranslationCard from './components/TranslationCard';

function App() {
  return (
    <div>
      <Header />
      <div style={{ marginLeft: '50px', marginRight: '50px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ flex: 0, margin: 'auto' }}>
            <TranslationCard />
          </div>
          <div style={{ flex: 0, margin: 'auto' }}>
            <SavedPhrasesCard />
          </div>
        </div>
        <LogsCard />
      </div>
    </div>
  );
}

export default App;
