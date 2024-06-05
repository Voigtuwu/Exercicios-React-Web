import "./input.css"
function InputComponente({label, value, onChange, placeholder}) {
    return(
        <div className="input-container">
            <label>{label}</label>
            <input type="text" 
            value={value} 
            onChange={onChange}
            placeholder={placeholder}    
             />

        </div>


    );


}

export default InputComponente