import FundoImagem from '../components/FundoImagem';
import InputGroup from '../components/inputs/InputGrourp'
import imagem from '../assets/chat.png'
import '../styles/pages/register.css'
import Buttom from '../components/buttons/Buttom'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../services/api';

function Register(){
    //estados
    const [nome,setNome] = useState("");
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const [erro,setErro] = useState("");
    const navigate = useNavigate();

    //funçao
    const cadastro = async (e) =>{
        console.log("Funçao cadastro foi acionada!");

        //evitar um refresh na pagina toda
        e.preventDefault();

        try{
            const dadosUser = await api.post("/auth/register" ,{nome,email,senha});
            console.log("Resposta da API:", dadosUser);

            // Limpar campos
            setNome("");
            setEmail("");
            setSenha("");

            navigate('/Home');
        } catch(error){
            if (error.response) {
                console.log("Erro do servidor:", error.response.data);
                setErro(error.response.data.message || error.response.data || "Erro desconhecido");
            } else {
                setErro("Erro ao conectar com o servidor");
                console.log("Erro:", error.message);
            }
        }
    }
    return(
        <main className='containerLogin'>
            <div className="right" id='right'>
                <h1 className='tituloR'>Bem-vindo(a) ao Fórum Online!</h1>
                <p>Conecte-se e participe das discussões</p>

                {erro && <p className="erro">{erro}</p>}

                <form className='formR' onSubmit={cadastro}>
                    <InputGroup className="containerRegister" label="Nome:" type="text" id="nome" value={nome} onChange={(e)=>setNome(e.target.value)} classNameInput='inputRegister'/>
                    <InputGroup className="containerRegister" label="Email:" type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} classNameInput='inputRegister'/>
                    <InputGroup className="containerRegister" label="Password:" type="password" id="senha" value={senha} onChange={(e)=>setSenha(e.target.value)} classNameInput='inputRegister'/>
                    <Buttom type="submit" texto="Criar conta"/>
                    <p id='link'>Já tem uma conta? <Link to="/Login" className='link'>Login!</Link></p>
                </form>
            </div>
            <FundoImagem Imagem={imagem}/>
            
        </main>
    );
}

export default Register