import '../styles/components/inputGroup.css'


function InputGroup({label,type,id}){
    return(
        <div className="container">
            <label htmlFor={id}>{label}</label>
            <input type={type}  id={id} />
        </div>
    );
}

export default InputGroup