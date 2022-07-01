import React from 'react';
import { useForm } from "react-hook-form";
const Home = () => {
    // const todos = [
    // {   _id: 1,
    //     title: 'todo tiktle',
    //     description: 'todo desceiption'
    // },
    // {   _id: 2,
    //     title: 'todo tiktle',
    //     description: 'todo desceiption'
    // },
    // {   _id: 3,
    //     title: 'todo tiktle',
    //     description: 'todo desceiption'
    // }
    // ]
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control w-52 mx-auto">
        <label class="label">
        <span class="label-text">ToDo</span>
            
        </label>
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
        {errors.description?.type === 'description' && <span class="label-text-alt text-red-500">{errors.description.message}</span>}
        {errors.description?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.description.message}</span>}
            
            
        </label>
        </div> 
       
        
        
       
        
       
        
        <button class="btn btn-secondary mt-1">TODo App</button>
        </form>
    );
};

export default Home;