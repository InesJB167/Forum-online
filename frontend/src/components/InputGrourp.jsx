import '../styles/components/inputGroup.css'


function InputGroup({label,type,id,className}){
    //as crases permiteem concatenar dois elementos sem precisar usar o sinal + 
    return(
        <div className={`container ${className}`}>
            <label htmlFor={id}>{label}</label>
            <input type={type}  id={id} className={`inputR ${className}`}/>
        </div>
    );
}


export default InputGroup