import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

import Home from './pages/Home/Home.jsx';
import ItemDetailContainer from './components/ItemDetaiñlContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <header className="App-header">
          <Routes>
            <Route path="/" element ={<Home/>}/>
            <Route path="/item/:id" element ={<ItemDetailContainer/>}/>
            <Route path="/category/:id" element ={<ItemListContainer/>}/>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
