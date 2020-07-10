import React from 'react';

const  HolaMundo = () => {
  const Hello = '¡Hola Mundo!';
  const isTrue = true;
  return(
    <div className="HolaMundo">
      <h1>{Hello}</h1>
      <h2>Curso escencial de react</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/245px-React.svg.png" alt="cats"/>
      {isTrue ? <h4>Esto es verdadero</h4> :  <h5>Soy falso</h5>}
      {isTrue && <h4>Soy verdadero</h4> }
    </div>
  );
};

export default HolaMundo;