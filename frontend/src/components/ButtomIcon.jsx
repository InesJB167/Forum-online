import '../styles/components/buttomIcon.css'


function ButtomIcon({icon}){
    
    return(
        <>
        <div className="btn">
            <button className='btnIcon'>{icon}</button>
        </div>
        </>
    );
}

export default ButtomIcon