import '../styles/components/buttomIcon.css'


function ButtomIcon({icon,fechar,id,className}){
    
    return(
        <>
        <div className={`btn ${className}`}>
            <button className='btnIcon' onClick={fechar} id={id}>{icon}</button>
        </div>
        </>
    );
}

export default ButtomIcon