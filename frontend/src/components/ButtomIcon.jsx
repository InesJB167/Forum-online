import '../styles/components/buttomIcon.css'


function ButtomIcon({icon,fechar,id}){
    
    return(
        <>
        <div className="btn">
            <button className='btnIcon' onClick={fechar} id={id}>{icon}</button>
        </div>
        </>
    );
}

export default ButtomIcon