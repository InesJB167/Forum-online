import axios from "axios";
import { useEffect, useState } from "react";
import ButtomIcon from "../components/buttons/ButtomIcon";
import { Edit, Trash2 } from "lucide-react";
import "../styles/pages/topicoList.css"

function TopicoList() {
    const [topicos, setTopicos] = useState([]);
    const icon = [<Edit size={25} color="white"/>,<Trash2 size={25} color="white"/>]

    useEffect(() => {
        // Lógica para buscar tópicos
        axios.get("http://localhost:5000/api/topicos/listar")
            .then(response => {
                console.log("Tópicos buscados:", response.data);
                // Aqui você pode atualizar o estado com os tópicos recebidos   
                setTopicos(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar tópicos:", error);
            });

    }, []);

    return (
        <div className="todos-tpicos">
            <h1>Lista de Tópicos</h1>
            {/* Aqui você pode adicionar a lógica para exibir os tópicos */}
            {topicos.length === 0 ? (
                <p>Nenhum tópico encontrado</p>
            ) : (
                <div className="topico-list">
                    {topicos.map(topico => (
                        <div key={topico.idTopico} className="topico-item">
                            <div className="topicoHeader">
                                <h3>{topico.desgnacao}</h3>
                                <h4>{topico.descricao}</h4>
                            </div>
                            <div className="editar-excluir-topicos">
                                {/* Aqui você pode adicionar botões para editar e excluir o tópico */}
                                <ButtomIcon icon={icon[0]}/>
                                <ButtomIcon icon={icon[1]}/>
                            </div>
                        </div>
                        
                    ))}

                </div>
            )}
        </div>
    );
}   

export default TopicoList;