import '../../styles/components/inputs/inputIcon.css'


function InputIcon({icon,type,placeholder,value,onChange,onFocus, readOnly}){
    
    return(
        <>
        <div className="input">
            <input className='inputItem' type={type} placeholder={placeholder} value={value} onChange={onChange} autoComplete="off" name="nope" onFocus={onFocus} readOnly={readOnly}/>
            <button className='btn'>{icon}</button>
        </div>
        </>
    );
}

export default InputIcon