import React from 'react';

const LodeTodo = ({todonames}) => {
    const {todoname,description} = todonames
    return (
        <div >
            <div class="card w-96 bg-base-100 shadow-xl mx-auto mt-5">
  <div class="card-body">
    <h2 class="card-title">{todoname}</h2>
    <p>{description}</p>
   
  </div>
</div>
        </div>
    );
};

export default LodeTodo;