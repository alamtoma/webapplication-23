import React, { useState } from 'react';

const InputButton = () => {
    const [inputValue, setInputValue] = useState("");


    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
      };  
      
      const handleButtonClick = () => {
        alert(inputValue); // Display the input value in an alert
        // You can also use console.log(inputValue) to log it to the console
      };
      return (
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type something..."
          />
          <button onClick={handleButtonClick}>Click Me</button>
        </div>
      );
    };
    
    export default InputButton;