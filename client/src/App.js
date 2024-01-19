import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PvtOrgRegister from './components/PvtOrgRegister';
import PvtOrgLogin from './components/PvtOrgLogin';
import PvtScholarshipForm from './components/PvtScholarshipForm';
import StudentLogin from './components/studentLogin';
import Studentregister from './components/Studentregister';
import StudentRegistrationform from './components/StudentRegistrationform';
import Next from './components/Next';
const App = () => {
  return (
 <BrowserRouter>
 <Routes>

<Route path='/' element={<Home/>} />
<Route path='/pvtOrgRegister' element={<PvtOrgRegister/>} />
<Route path='/pvtOrgLogin' element={<PvtOrgLogin/>} />
<Route path='/pvtScholarshipForm/:pvtOrgId' element={<PvtScholarshipForm/>} />
<Route path='/studentlogin' element={<StudentLogin/>}/>
<Route path='/studentregister' element={<Studentregister/>}/>
<Route path='/studentRegistrationform/:studentId' element={<StudentRegistrationform/>}/>
<Route path='/nextStep/:studentId' element={<Next/>}/>


 </Routes>
  </BrowserRouter>
  );
};

export default App;