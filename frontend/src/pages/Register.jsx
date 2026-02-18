import FundoImagem from '../components/FundoImagem';
import InputGroup from '../components/inputs/InputGrourp'
import imagem from '../assets/chat.png'
import '../styles/pages/register.css'
import Buttom from '../components/buttons/Buttom'
import { Link } from 'react-router-dom';

function Register(){
    return(
        <main className='containerLogin'>
            <div className="right" id='right'>
                <h1 className='tituloR'>Bem-vindo(a) ao Fórum Online!</h1>
                <p>Conecte-se e participe das discussões</p>
                <form action="" className='formR'>
                    <InputGroup className="containerRegister" label="Nome:" type="text" id="nome" classNameInput='inputRegister'/>
                    <InputGroup className="containerRegister" label="Email:" type="email" id="email" classNameInput='inputRegister'/>
                    <InputGroup className="containerRegister" label="Password:" type="Password" id="senha" classNameInput='inputRegister'/>
                    <Buttom type="submit" texto="Criar conta"/>
                    <p id='link'>Já tem uma conta? <Link to="/Login" className='link'>Login!</Link></p>
                </form>
            </div>
            <FundoImagem Imagem={imagem}/>
            
        </main>
    );
}

export default Register