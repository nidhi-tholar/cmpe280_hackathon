import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/nav';
import Login from './components/login';
import Home from './components/home';
import Imports from './components/imports';
import Predict from './components/predict';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
              <Route path="/" element={<Login/>}></Route>
              <Route path="/home" element={<Home/>}></Route>
              <Route path="/imports" element={<Imports/>}></Route>
              <Route path="/predict" element={<Predict/>}></Route>
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;