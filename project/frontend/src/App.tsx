import React from 'react';
import './App.css';
import { Routes, Form } from 'react-router-dom';
import { Route } from "react-router-dom";


import HomePage from './components/home/home';
import VacationDisplay from './components/pages/displayvacation/displayvacation';
import Login from './components/pages/login/login';
import SignUp from "./components/pages/signup/signup";
import AddVacation from "./components/pages/addvacation/addvacations"
import UpdateVacationData from "./components/pages/updatevacation/updatevacation"

function App() {
  return (

    <div className='App'>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/vacations" element={<VacationDisplay />} />
        <Route path='/updatevacation' element={<UpdateVacationData />} />
        <Route path='/addvacation' element={<AddVacation />} />
      </Routes>

      {/* <VacationDisplay /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <AddVacation /> */}
      {/* <DeleteVacation /> */}
      {/* <UpdateVacationData /> */}


    </div >
  );
}

export default App;


