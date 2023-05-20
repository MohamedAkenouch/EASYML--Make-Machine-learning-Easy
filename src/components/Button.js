
import React from 'react';
function Button(Props) {
  return (
    
      <button className='btn' style={{backgroundColor:Props.color , width:Props.width , color: Props.textColor} } >{Props.title}</button>
    
  )
}

export default Button
