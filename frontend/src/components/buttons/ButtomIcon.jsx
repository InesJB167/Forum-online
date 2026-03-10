import '../../styles/components/buttons/buttomIcon.css'


function ButtomIcon({icon,onClick,id,className}){
    
    return(
        <>
        <div className={`btn ${className}`}>
            <button className='btnIcon' onClick={onClick} id={id}>{icon}</button>
        </div>
        </>
    );
}

export default ButtomIcon