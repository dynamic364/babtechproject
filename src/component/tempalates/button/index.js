import React, { useState, useEffect} from 'react';
import "./button.css";

function Button({children, buttonText }) {
    const [text, setText] = useState(buttonText);

  useEffect(() => {
    setText(buttonText); // Update button text when the prop changes
  }, [buttonText]);
 
    
  return (
    <div  >
      {
          
        <button className="button" >{text}</button>
      
      }
       
      {React.Children.map(children, child => React.cloneElement(child))}
    </div>
  );
}

export default Button;

