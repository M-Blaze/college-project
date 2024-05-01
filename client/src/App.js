
import './App.css';
import React from "react";
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateCard from './pages/CreateCard';
import Login from './pages/Login';
import Register from './pages/Register'
import CardPage from './pages/CardPage'
import DashBoard from './pages/DashBoard';
import Edit from './pages/Edit';
import CardDisplay from './pages/CardDisplay';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create-card' element={<CreateCard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/digitalcardPage/:id' element={<CardPage />}></Route>
        <Route path='/dashBoard' element={<DashBoard />}></Route>
        <Route path='/edit/:id' element={<Edit />}></Route>
        <Route path='/card/:cardId' element={<CardDisplay />}></Route>
      </Routes>
    </div>
  );
}

export default App;
