import React, { useState } from 'react';

const Next = () => {
  const [bankAccount, setBankAccount] = useState('');

  const handleBankAccountChange = (e) => {
    setBankAccount(e.target.value);
  };

  const handleVerifyBank = () => {
    // Add your logic for verifying the bank here
    console.log(`Verifying bank account: ${bankAccount}`);
  };

  const handleVerifyIncome = () => {
    // Add your logic for verifying income details here
    console.log('Verifying income details');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className='m-auto w-full md:w-1/2 lg:w-1/3 p-4 md:p-8 bg-gray-100 rounded-lg shadow-md'>
        <div className="text-2xl font-semibold mb-4 text-gray-800 text-center">
          Congratulations! You are there!
        </div>
        <div className="mb-4">
          <label className="text-gray-700 block mb-2">
            Enter Your Bank Account
          </label>
          <input 
            className="w-full border border-gray-300 rounded-md p-2"
            type="text"
            placeholder="Bank Account Number"
            value={bankAccount}
            onChange={handleBankAccountChange}
          />
        </div>
        <div className="mb-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md w-full hover:bg-blue-600 focus:outline-none"
            onClick={handleVerifyBank}
          >
            Verify Your Bank
          </button>
        </div>
        <div>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-md w-full hover:bg-green-600 focus:outline-none"
            onClick={handleVerifyIncome}
          >
            Verify Your Income Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Next;
