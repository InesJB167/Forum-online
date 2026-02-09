import '../styles/components/inputIcon.css'


function InputIcon({icon,texto,buscar}){
    
    return(
        <>
        <div className="input">
            <input type={texto} placeholder={buscar} />
            <button>{icon}</button>
        </div>
        </>
    );
}

export default InputIcon