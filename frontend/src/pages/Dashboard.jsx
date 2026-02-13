import '../styles/pages/home.css'
import Aside from '../components/Aside'
import TopBar from '../components/Topbar';
import MainContent from '../components/MainContet';



function Dashboard(){
    return(
       <>
       <div className="content">
        <Aside />
        <TopBar />
        <MainContent />
       </div>
       </>
    );
}

export default Dashboard