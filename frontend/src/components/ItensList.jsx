import { Link } from 'react-router-dom';
import '../styles/components/itensList.css'

function ItensList({icon,text,url}){
    return(
        <>
        <Link to={url} className='item'>{icon}<p>{text}</p></Link>
        </> 
    );
}

export default ItensList