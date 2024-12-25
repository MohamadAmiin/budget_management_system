import React, { useState } from "react";
import axios from "axios";

const AddExpense = () => {
 const [description, setDescription] = useState("");  
 const [category, setCategory] = useState("");  
 const [amount, setAmount] = useState("");  
 const [paymentMethod, setPaymentMethod] = useState("");  

 const handleRegister =(e)=>{
    e.preventDefault();
  axios.post("http://localhost:9000/api/expense",{
   "description":description,
   "category":category,
    "amount":amount,
    "paymentMethod":paymentMethod
 }).then((res)=>{
    console.log(res.data)
    alert("Expense created successfully")
 })
}
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-lg font-bold mb-4">Add Expense</h2>
      <form>
        <div className="grid grid-cols-1 gap-4">
          {/* Description Input */}
          <div>
            <label className="block text-sm font-medium">Description</label>
            <input 
              type="text"
             value={description}
             onChange={(e)=>setDescription(e.target.value)}
              placeholder="Enter expense description"
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          {/* Category Select */}
          <div>
            <label className="block text-sm font-medium">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              placeholder="Enter expense category"
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          {/* Amount Input */}
          <div>
            <label className="block text-sm font-medium">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e)=>setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full px-4 py-2 border rounded "
            />
        
          </div>

          {/* Payment Method Select */}
          <div>
            <label className="block text-sm font-medium">Payment Method</label>
            
            <input
              type="text"
              value={paymentMethod}
              onChange={(e)=>setPaymentMethod(e.target.value)}
              placeholder="Enter expense payment method"
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button 
            onClick={handleRegister}
            className="bg-blue-500  text-white px-6 py-2 rounded">Save</button>
        </div>
      </form>
    </div>
  );
};


export default AddExpense;
