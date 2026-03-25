import { BellDotIcon, Search, UserCircle2 } from 'lucide-react';
import '../styles/components/topBar.css'
import InputIcon from './inputs/InputSearch';
import ButtomIcon from './buttons/ButtomIcon';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function TopBar() {

    const [busca, setBusca] = useState("");
    const [resultados, setResultados] = useState([]);

    const navigate = useNavigate();
    const [role, setRole] = useState("");
    const [nameUser, setNameUser] = useState("");

    const icon = [
        <Search size={30} color='rgb(199, 196, 196)' />,
        <BellDotIcon size={30} color='#2658c3' />,
        <UserCircle2 size={30} color='#2658c3' />
    ];


    useEffect(() => {
        const infoUser = async () => {
            try {
                const resposta = await api.get("/user/perfil", {
                    headers: {
                        //pegando o token
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });

                //pegar cada dado
                setNameUser(resposta.data.nameUser);
                setRole(resposta.data.role);

            } catch (error) {
                console.log("Erro ao buscar perfil:", error);
                setErro("Não foi possível carregar os dados do usuário");
            }
        }

        infoUser();
    }, []);

    useEffect(() => {
        setBusca("");
    }, []);

    const buscarTopicos = async (e) => {
        const valor = e.target.value;
        setBusca(valor);

        if (valor.length < 2) {
            setResultados([]);
            return;
        }

        try {

            const resposta = await api.get(`/topico/busca?nome=${valor}`);

            setResultados(resposta.data);

        } catch (error) {
            console.log("Erro na busca:", error);
        }
    }

    const abrirTopico = (idTopico) => {
        navigate(`/Home/chat/${idTopico}`);
        setResultados([]);
        setBusca("");
    }

    return (
        <>
            <div className="topBar">

                <div className="pesquisa">

                    {/* INPUTS FAKE PRA ENGANAR O CHROME */}
                    <input type="text" name="email" style={{ display: "none" }} />
                    <input type="password" name="password" style={{ display: "none" }} />
                    <InputIcon
                        icon={icon[0]}
                        type='search'
                        placeholder='Buscar tópico'
                        value={busca}
                        onChange={buscarTopicos}
                        readOnly={true}
                        onFocus={(e) => e.target.setAttribute('readonly')}
                        
                    />

                    {resultados.length > 0 && (

                        <div className="resultadoBusca">

                            {resultados.map((topico) => (
                                <div
                                    key={topico.idTopico}
                                    className="itemResultado"
                                    onClick={() => abrirTopico(topico.idTopico)}
                                >
                                    {topico.desgnacao}
                                </div>
                            ))}

                        </div>

                    )}

                </div>

                <div className="iconItems">
                    <ButtomIcon icon={icon[1]} />
                    <div>
                        <ButtomIcon icon={icon[2]} /> <label>{role}</label>
                    </div>
                </div>

            </div>
        </>
    );
}

export default TopBar