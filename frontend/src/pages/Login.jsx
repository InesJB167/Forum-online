import '../styles/main.css'
import '../styles/pages/login.css'
import { Link } from 'react-router-dom';
import InputGroup from '../components/inputs/InputGrourp';
import Buttom from '../components/buttons/Buttom'
import imagem from '../assets/chat.png'
import FundoImagem from '../components/FundoImagem';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function Login() {
    //estados
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    const navigate = useNavigate();

    //funcao
    const loginSystem = async (e) => {
        console.log("clicou no login");
        //impedir a pagina de recarregar
        e.preventDefault();

        try {
            //pegar os elementos 
            const resposta = await api.post("/login", { email, senha });
            console.log("Resposta da API:", resposta);

            // Limpar campos
            setEmail("");
            setSenha("");

            //guardar os dados "token" na pagina  
            localStorage.setItem("token", resposta.data.token);

            //guarda o user
            localStorage.setItem("user", JSON.stringify(resposta.data.user));

            //mandar o user para o dashboad
            //por enquanto todos user sao encaminhados pra o mesmo dashbord futuramente isso vai mudar
            navigate('/Home'); 

        } catch (error) {
            console.log("Erro completo:", error);

            if (error.response) {
                console.log("Erro do servidor:", error.response.data);
                setErro(error.response.data.message || "Erro desconhecido");
            } else {
                setErro("Erro ao conectar com o servidor");
                console.log("Erro:", error.message);
            }
        }
    }

    //layout
    return (
        <>
            <main className='containerLogin'>
                <FundoImagem Imagem={imagem} />

                <div className="right">
                    <div>
                        <h1>Fórum Online</h1>
                        <p>Conectando pessoas através do conhecimento.</p>
                    </div>
                    <form className='formLogin' onSubmit={loginSystem} autoComplete='on'>
                        {erro && <p className='erroLogin'>{erro}</p>}
                        <InputGroup label="Email:" type="email" id="emailL" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <InputGroup label="Password:" type="Password" id="senhaL" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        <Buttom type="submit" texto="Login" />
                        <p id='link'>Já possui uma conta? <Link to="/Register" className='link'>Criar conta !</Link></p>
                    </form>
                </div>
            </main>
        </>
    );
}

export default Login