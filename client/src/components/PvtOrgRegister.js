import React from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const PvtOrgRegister = () => {

    const navigate=useNavigate();

    const [formData,setFormData]=React.useState({
        tanNo:"",
       })

    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
       }

       const handleSubmit = async (e) => { 
        e.preventDefault();
      
        try {
          
            console.log("TanNo detailsformed successfully!");
            console.log(formData);
            const response= await axios.post('http://localhost:8000/api/v1/tan/check-tan-details',formData);
            console.log(response.data);
            
            try {
                if (!response.data.success) {
                    alert("Your Organization is Not Verified");
                    setFormData({
                        tanNo: "",
                      });
                } else {
                     const orgName=response.data.orgName;
                    console.log(orgName);
                    await axios.post("http://localhost:8000/api/v1/nsp/add-pvt-org-nsp",{orgName} );
                    
                    alert("Your organization is successfully verified");
                    
                    navigate('/pvtOrgLogin');
                }
            } catch (err) {
                console.log(err);
            }
          
          
        } catch (error) {
          console.error("Error sbmitting form:", error);
        }
      };


  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Register with ISP</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="TanNo">
              Enter Tan no:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="tanNo"
              type="text"
              name="tanNo"
              value={formData.tanNo}
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

export default PvtOrgRegister;