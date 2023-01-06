import React from "react";
import Nav from "../../Navbar/Nav";

const Checkout = () => {
  return (
    <div>
      <Nav />
       <div className="flex items-center justify-center">
       <form className="w-[400px]">
        <div class="form-control w-full  mb-2">
          <label class="label">
            <span class="label-text">What is your name?</span>
        
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
         
        </div>
        <div class="form-control w-full  mb-2">
          <label class="label">
            <span class="label-text">What is your name?</span>
        
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
         
        </div>
        <div class="form-control w-full  mb-2">
          <label class="label">
            <span class="label-text">What is your name?</span>
        
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
         
        </div>
        <div class="form-control w-full  mb-2">
          <label class="label">
            <span class="label-text">What is your name?</span>
        
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
         
        </div>
        <div class="form-control w-full  mb-2">
          <label class="label">
            <span class="label-text">What is your name?</span>
        
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
         
        </div>
     
      
       
       
        <button type="submit" className="btn btn-primary text-white w-full">Checkout</button>
      </form>
       </div>
    </div>
  );
};

export default Checkout;
