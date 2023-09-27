

const Alert = ({setInputValue, isClicked, handleButtonClick}) =>{
    const handleInputChange = (event) =>{
        const newValue = event.target.value;
        setInputValue(newValue);

    };
    return(
        <div>
            <input 
            type="text"
            onChange = {handleInputChange}
            placeholder="Skrive her" />

            <button onClicke = {handleButtonClick}>Click Me</button>
        </div>
    )
}
export default Alert;