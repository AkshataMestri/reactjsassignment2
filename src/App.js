import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Registration from './Registration';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="container">
    <Header/>
    <Routes>
      <Route path="/" element={<Registration/>} />

    </Routes>

    </div>
    </Router>
  );
}

export default App;
