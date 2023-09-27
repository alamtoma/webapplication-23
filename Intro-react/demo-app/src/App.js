import Food from "./components/Food";
import InputButton from "./components/InputButton";
import MyComponents from "./components/MyComponents";
import Alert from "./components/Alert";
import Title from "./components/Title";
import React, { useState } from 'react';



function App(){
  const [inputValue, setInputValue] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const food = ['Pizza', 'Hamburger', 'Coke'];
  const handleButtonClick = () =>{
    setIsClicked(!isClicked);
  };
const handleInputChange =(event) =>{
const newValue = event.target.value;
setInputValue(newValue);
console.log("Change");
  };
  
  return(
    <div className="App">    
          <MyComponents/>
          <Title/> 
          <InputButton/>
          <Food foodList={food}/>
          <button onClick={handleButtonClick}>Click Me</button>
          <input type="text"
          value={inputValue}
           onChange={handleInputChange} 
           placeholder="Skrive here"/>
           <Alert
            setInputValue={setInputValue}
            isClicked={isClicked} 
            handleButtonClick={handleButtonClick}
           
           />


           
    </div>
  );
}

export default App;