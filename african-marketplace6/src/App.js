import React from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Homepage from './homepage/Homepage';
import Login from './components/login';


function App() {
  return (
    <div className="App">
      <h1>TO BE DELETED TEST TESTE</h1>
      <nav>
      
      <div className="nav-links">
        <Link to="/homepage">Home</Link>
        <Link to="/login">Log in</Link>


      </div>
      </nav>
      <Routes>
        <Route path="/homepage" element={<Homepage/>}>
        </Route>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
