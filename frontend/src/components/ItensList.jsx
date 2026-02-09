import '../styles/components/itensList.css'

function ItensList({icon,text,id}){
    return(
        <>
        <li id={id} className='item'>{icon}<p>{text}</p></li>
        </>
    );
}

export default ItensList