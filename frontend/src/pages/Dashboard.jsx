import '../styles/pages/home.css'
import Aside from '../components/Aside'
import TopBar from '../components/Topbar';
import MainContent from '../components/MainContet';
import { useState } from 'react';
import Topico from './Topico';



function Dashboard(){
    const [modalAberta,SetModalAberta] = useState(false)
    return(
       <>
       <div className="content">
        <Aside abrir={() => SetModalAberta(true)} />
        <TopBar />
        <MainContent />
        <Topico 
            isOpen={modalAberta}
            Closed={()=>SetModalAberta(false)}
        />
       </div>
       </>
    );
}

export default Dashboard