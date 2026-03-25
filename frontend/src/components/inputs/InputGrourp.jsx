import '../../styles/components/inputs/inputGroup.css'


function InputGroup({ label, type, id, className, classNameInput, value, onChange, editavel ,autoComplete}) {
    //as crases permiteem concatenar dois elementos sem precisar usar o sinal + 
    //para impedir o user de editar o input usamos o disabled
    return (
        <div className={`container ${className}`}>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} value={value} onChange={onChange} className={`inputR ${classNameInput}`} disabled={editavel} autoComplete={autoComplete}/> 
        </div>
    );
}


export default InputGroup