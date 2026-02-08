import '../styles/components/inputGroup.css'


function InputGroup({label,type,id,className}){
    return(
        <div className={`container ${className}`}>
            <label htmlFor={id}>{label}</label>
            <input type={type}  id={id} className='inputR'/>
        </div>
    );
}


export default InputGroup