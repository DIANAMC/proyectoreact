import React from 'react';

class Button extends React.Component{
  render(){
    const  { count} = this.state;
    return(
      <div>
        <h1>Manzanas: {count} </h1>
        <button type="button">click</button>
      </div>

    )
  }
}



export default Button;