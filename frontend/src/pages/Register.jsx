import FundoImagem from '../components/FundoImagem';
import InputGroup from '../components/InputGrourp'
import SelectGroup from '../components/SelectGroup'
import imagem from '../assets/chat.png'
import '../styles/pages/register.css'
import Buttom from '../components/Buttom'
import { Link } from 'react-router-dom';

function Register(){
    return(
        <main className='containerLogin'>
            <div className="right">
                <h1 className='tituloR'>Welcome to Forum Online!</h1>
                <form action="" className='formR'>
                    <InputGroup className="containerRegister" label="Name:" type="text" id="nome"/>
                    <SelectGroup className="especialSelect" label="Gênero" id="genero" option1="Masculino" option2="Feminino"/>
                    <InputGroup className="containerRegister" label="Email:" type="email" id="email"/>
                    <InputGroup className="containerRegister" label="Password:" type="Password" id="senha"/>
                    <InputGroup className="containerRegister" label="Confirm Password:" type="Password" id="senha2"/>
                    <Buttom type="submit" texto="Sign in"/>
                    <p id='link'>Have an account? <Link to="/Login">Login!</Link></p>
                </form>
            </div>
            <FundoImagem Imagem={imagem}/>
            
        </main>
    );
}

export default Register