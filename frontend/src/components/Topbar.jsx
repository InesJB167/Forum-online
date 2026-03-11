import { BellDotIcon, Search, UserCircle2 } from 'lucide-react';
import '../styles/components/topBar.css'
import InputIcon from './inputs/InputSearch';
import ButtomIcon from './buttons/ButtomIcon';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function TopBar(){

    const [busca,setBusca] = useState("");
    const [resultados,setResultados] = useState([]);

    const navigate = useNavigate();

    const icon= [
        <Search size={30} color='rgb(199, 196, 196)'/>,
        <BellDotIcon size={30} color='#2563EB'/>,
        <UserCircle2 size={30} color='#2563EB'/>
    ];

    const buscarTopicos = async(e)=>{
        const valor = e.target.value;
        setBusca(valor);

        if(valor.length < 2){
            setResultados([]);
            return;
        }

        try{

            const resposta = await api.get(`/topico/busca?nome=${valor}`);

            setResultados(resposta.data);

        }catch(error){
            console.log("Erro na busca:",error);
        }
    }

    const abrirTopico = (idTopico)=>{
        navigate(`/Home/chat/${idTopico}`);
        setResultados([]);
        setBusca("");
    }

    return(
        <>
        <div className="topBar">

            <div className="pesquisa">

                <InputIcon
                    icon={icon[0]}
                    type='text'
                    placeholder='Buscar tópico'
                    value={busca}
                    onChange={buscarTopicos}
                />

                {resultados.length > 0 && (

                    <div className="resultadoBusca">

                        {resultados.map((topico)=>(
                            <div
                                key={topico.idTopico}
                                className="itemResultado"
                                onClick={()=>abrirTopico(topico.idTopico)}
                            >
                                {topico.desgnacao}
                            </div>
                        ))}

                    </div>

                )}

            </div>

            <div className="iconItems">
                <ButtomIcon icon={icon[1]}/>
                <ButtomIcon icon={icon[2]}/>
            </div>

        </div>
        </>
    );
}

export default TopBar