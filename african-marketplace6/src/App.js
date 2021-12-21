import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <h1>TO BE DELETED TEST TESTE</h1>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
