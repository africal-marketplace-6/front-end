import React from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <h1>TO BE DELETED TEST TESTE</h1>
      <nav>
      
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Log in</Link>


      </div>
      </nav>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}>
        </Route>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
