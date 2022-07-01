import React, { useEffect, useState } from 'react';
import LodeTodo from '../LodeTodo/LodeTodo';

const Tododata = () => {
    const [todoname,setTodoname]  = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/app')
        .then(res=>res.json())
        .then(data=>setTodoname(data))
       
    },[])
    return (
      <div>
        {
            todoname.map(todonames=><LodeTodo key={todonames._id} todonames={todonames}></LodeTodo>)
        }
      </div>
    );
};

export default Tododata;