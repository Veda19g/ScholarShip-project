import React from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const Studentregister = () => {

const navigate=useNavigate();

const [formData,setFormData]=React.useState({
    aadharNo:""
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
      console.log("Aadhar detailsformed successfully!");
      console.log(formData);
      const response=await axios.post('http://localhost:8000/api/v1/aadhar/check-aadhar-details',formData);
      console.log(response.data);
      if(!response.data.success){
        alert("Your Orgnaization is not verified");
        setFormData({
          aadharNo:""
        });
      }
      else{
        const name=response.data.accname;
        const age=response.data.age;
        const requestData = {
          name: name,
          age: age
        };
        const status=axios.post('http://localhost:8000/api/v1/student-nsp-entry/student-login-credentials',requestData)
        console.log(status.data);
        alert("Your organization is successfully verified");
        navigate('/studentLogin');
      }
    }catch(err){

    }
    
    setFormData({
        aadharNo:""
    })
}
    
 



return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h2 className="text-2xl font-bold mb-4">Student Register Yourself with ISP</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="aadharNo">
            Enter aadhar no:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="aadharNo"
            type="text"
            name="aadharNo"
            value={formData.aadharNo}
            onChange={handleInputChange}
            placeholder="123456789012"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type='submit'
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Studentregister;