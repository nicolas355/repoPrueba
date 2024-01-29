import React from 'react';
import '../App.css'
const Formulario = ({ children }) => {
  return (
    <div>
      <div className=" mx-auto mt-5">
        <div  className="flex gap-9 ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Formulario;
