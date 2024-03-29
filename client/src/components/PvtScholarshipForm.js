import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from "axios"
const PvtScholarshipForm = () => {
  
  const {pvtOrgId}=useParams();
  


  const [formData,setFormData]=React.useState({
    schemeName:"",
    startDate:"",
    endDate:"",
    gender:"",
    income:"",
    guidelines:""
  });


  const handleInputChange=(e)=>{
    
      const {name,value}=e.target;
      setFormData({
          ...formData,
          [name]:value,
      });
     

  };


  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log("formSubmitted");
    console.log(formData);
    console.log(pvtOrgId);

   try{
    const response=await axios.post(`http://localhost:8000/api/v1/pvtScholarship/add-pvt-scholarship-entry/${pvtOrgId}`,formData);
    console.log(response.data);    
   }
   catch(err){
    console.log(err);
   }


    setFormData({
      schemeName:"",
    startDate:"",
    endDate:"",
    gender:"",
    income:"",
    guidelines:""
    })
  }
  
  return (

    <div className="bg-gray-100 h-full flex items-center justify-center p-10">
    <div className="bg-white p-8 rounded shadow-md max-w-md w-full"> 
      <h2 className="text-2xl font-bold mb-4 text-center">Enter Your Scheme Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="schemeName">
            Scheme Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="schemeName"
            type="text"
            name="schemeName"
            value={formData.schemeName}
            onChange={handleInputChange}
            placeholder="scheme name"  
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
            Start Date:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="startDate"
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
            End Date:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="endDate"
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
            Gender:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="gender"
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            placeholder="gender"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="income">
            Income Requirement:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="income"
            type="text"
            name="income"
            value={formData.income}
            onChange={handleInputChange}
            placeholder="1000000"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guidelines">
            Guidelines:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="guidelines"
            type="text"
            name="guidelines"
            value={formData.guidelines}
            onChange={handleInputChange}
            placeholder="guidelines"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type='submit'
          >
            Upload Your Scholarship Scheme
          </button>
        </div>
      </form>
    </div>
</div>
  );
};

export default PvtScholarshipForm;