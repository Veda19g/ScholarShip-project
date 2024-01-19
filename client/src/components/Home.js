import React from 'react';
import { useNavigate } from "react-router-dom";
const Home = () => {
   
   const navigate=useNavigate();

   const handleRegister=()=>{
      navigate('/pvtOrgRegister');
   }

   const handleLogin=()=>{
    navigate('/pvtOrgLogin');
   }
  

  const handleStudentLogin=()=>{
    navigate('/studentlogin');
  }

  const handleStudentRegister=()=>{
    navigate('/studentregister');
  }

  return (
    <div>
      <button onClick={handleRegister} className='bg-slate-400 rounded-xl p-8 m-10'>
        Pvt Org Apply Here
      </button>
      <button onClick={handleLogin} className='bg-slate-400 rounded-xl p-8 m-10'>
        Pvt Org Login  Here
      </button>
      <button onClick={handleStudentRegister} className='bg-slate-400 rounded-xl p-8 m-10'>
        Student Register Here
      </button>
      <button onClick={handleStudentLogin} className='bg-slate-400 rounded-xl p-8 m-10'>
        Student Login Here
      </button>
   </div>
  );
};

export default Home;