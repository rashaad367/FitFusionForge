import React, { useEffect, useState } from 'react'
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ProfileInfo from './pages/ProfileInfo';
import WorkoutCreator from './pages/WorkoutCreator';
import NoPage from './pages/NoPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profileinfo" element={<ProfileInfo />} />
          <Route path="/workoutcreator" element={<WorkoutCreator />} />
          <Route path="*" element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
