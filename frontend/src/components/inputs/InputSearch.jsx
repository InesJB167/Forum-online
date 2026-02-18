import '../../styles/components/inputs/inputIcon.css'


function InputIcon({icon,texto,buscar}){
    
    return(
        <>
        <div className="input">
            <input className='inputItem' type={texto} placeholder={buscar} />
            <button className='btn'>{icon}</button>
        </div>
        </>
    );
}

export default InputIcon