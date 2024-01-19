import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const StudentLogin = () => {
     
    const navigate=useNavigate();

    const [formData,setFormData]=React.useState({
        accName:"",
        Phone:"",
        otp:""
    });
    
    
    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
       }
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
          console.log("form submitted succesfully");
          const name=formData.accName;
          console.log(name);
          const response = await axios.post("http://localhost:8000/api/v1/student-nsp-entry/check-student-login-details", { name });
          console.log(response.data);
          const success=response.data.success;
          if(!success){
           alert("student  is not registered with isp");
            setFormData({
              accName:"",
              Phone:"",
              otp:"" 
            });
            
          }
          else{
           alert("your details are verified");
           navigate(`/studentRegistrationform/${response.data.id}`);
          }

     }catch(err){
         console.log(err);
     }
    }
    


  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login into ISP</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="accName">
              Enter Your Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="accName"
              type="text"
              name="accName"
              value={formData.accName}
              onChange={handleInputChange}
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Phone">
              Enter Phone No:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Phone"
              type="text"
              name="Phone"
              value={formData.OrgPhone}
              onChange={handleInputChange}
              placeholder="0123456789"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
              Enter Otp:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="otp"
              type="text"
              name="otp"
              value={formData.otp}
              onChange={handleInputChange}
              placeholder="xxxx"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type='submit'
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;