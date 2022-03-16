import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Update from './Pages/Update';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/update" element={<Update/>}/>
      </Routes>
    </Router>
  );
}

export default App;
