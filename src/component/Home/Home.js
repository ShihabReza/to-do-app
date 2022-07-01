import { differenceInBusinessDays } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Footer from '../Footer/Footer';
import LodeTodo from '../LodeTodo/LodeTodo';
import Tododata from '../Tododata/Tododata';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

   

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
       
        console.log(data)
        const url = `https://polite-goose-17638.herokuapp.com/app`
        fetch(url,{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(res=>res.json())
        .then(results=>{
            console.log(results)
           
        })
    }
    return (
        <div className=''>
            <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control w-52 mx-auto">
        <label class="label">
        <span class="label-text">ToDo</span>
            
        </label>
        <input type="text" placeholder="To Name" class="input input-bordered w-full max-w-xs" 
        {...register("todoname", {
            required:{
                value:true,
                message:'todoname is required',
            },
            // pattern: {
            //     value: /[A-Za-z]{3}/,
            //     message: 'provide is valid email' 
            //   }
          })}
        /> <br />
        <input type="text" placeholder="description" class="input input-bordered w-full max-w-xs" 
        {...register("description", {
            required:{
                value:true,
                message:'description is required',
            },
            // pattern: {
            //     value: /[A-Za-z]{3}/,
            //     message: 'provide is valid email' 
            //   }
          })}
        />
        

        <label class="label">
        {errors.description?.type === 'todoname' && <span class="label-text-alt text-red-500">{errors.todoname.message}</span>}
        {errors.description?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.todoname.message}</span>}
            
            
        </label>
        <label class="label">
        {errors.description?.type === 'description' && <span class="label-text-alt text-red-500">{errors.description.message}</span>}
        {errors.description?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.description.message}</span>}
            
            
        </label>
        </div> 
       
        
        
       
        
       
        
        <button class="btn btn-secondary mt-1">TODo App</button>
        
        </form>
        <ToastContainer />
        
          <div>
            <Tododata></Tododata>
          </div>
          <Footer></Footer>
        </div>
       
      
    );
};

export default Home;