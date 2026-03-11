import '../../styles/components/inputs/inputIcon.css'


function InputIcon({icon,type,placeholder,value,onChange}){
    
    return(
        <>
        <div className="input">
            <input className='inputItem' type={type} placeholder={placeholder} value={value} onChange={onChange}/>
            <button className='btn'>{icon}</button>
        </div>
        </>
    );
}

export default InputIcon