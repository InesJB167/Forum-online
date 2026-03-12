import '../../styles/components/buttons/buttomIcon.css'


function ButtomIcon({icon,onClick,id,className,nameUser}){
    
    return(
        <>
        <div className={`btn ${className}`}>
            <button className='btnIcon' onClick={onClick} id={id}>{icon} <span className='userName'>{nameUser}</span></button>
        </div>
        </>
    );
}

export default ButtomIcon