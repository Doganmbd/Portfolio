
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import LayoutIndex from './components/Layout/LayoutIndex';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutIndex />} />

        
      </Routes>
    </div>
  );
}

export default App;
