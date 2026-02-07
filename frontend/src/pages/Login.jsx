import  '../styles/main.css'
import '../styles/pages/login.css'
import { Link } from 'react-router-dom';
import InputGroup from '../components/InputGrourp';
import Buttom from '../components/Buttom'
import imagem from '../assets/chat.png'
import FundoImagem from '../components/FundoImagem';

function Login(){
    return (
        <>
            <main className='containerLogin'> 
                <FundoImagem Imagem={imagem}/>
        
                <div className="right">
                     <h1>Fórum Online</h1>
                    <p>Partilhe ideias. Debata. Aprenda.</p>
                    <form action="">
                       <InputGroup label="Name:" type="text" id="nome"/>
                       <InputGroup label="Email:" type="email" id="email"/>
                       <InputGroup label="Password:" type="Password" id="senhaDestructuring Assignment "/>
                       <Buttom type="submit" texto="Login"/>
                        <p id='link'>Don't have an account? <Link to="/register">Sign up!</Link></p>
                    </form>
                </div>
            </main>
        </>
    );
}

export default Login