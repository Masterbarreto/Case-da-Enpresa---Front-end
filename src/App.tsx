import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePages } from './components/HomePages'; 
import { Pagamento } from './components/Pagamento'; 
import './App.css';

function App() {
  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<HomePages />} /> {/* Rota para a HomePages */}
        <Route path="/Pagamento" element={<Pagamento />} />
      </Routes>
      <main className="content"></main> 
    </Router>
  );
}

export default App;
