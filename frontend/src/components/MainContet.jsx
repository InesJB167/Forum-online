import '../styles/components/mainContent.css'
import { Outlet } from 'react-router-dom';

function MainContent(){
    
    return(
        <>
        <div className="mainContent">
           <Outlet/>
        </div>
        
        </>
    );
}

export default MainContent