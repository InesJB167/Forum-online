import  '../styles/main.css'
import '../styles/pages/login.css'
import { Link } from 'react-router-dom';
import InputGroup from '../components/inputs/InputGrourp';
import Buttom from '../components/buttons/Buttom'
import imagem from '../assets/chat.png'
import FundoImagem from '../components/FundoImagem';

function Login(){
    return (
        <>
            <main className='containerLogin'> 
                <FundoImagem Imagem={imagem}/>
        
                <div className="right">
                    <div>
                        <h1>Fórum Online</h1>
                        <p>Conectando pessoas através do conhecimento.</p>
                    </div>
                    <form action="" className='formLogin'>
                       <InputGroup label="Email:" type="email" id="email" />
                       <InputGroup label="Password:" type="Password" id="senhaDestructuring Assignment " />
                       <Buttom type="submit" texto="Login"/>
                        <p id='link'>Já possui uma conta? <Link to="/Register" className='link'>Criar conta !</Link></p>
                    </form>
                </div>
            </main>
        </>
    );
}

export default Login