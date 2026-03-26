import ButtomIcon from "../buttons/ButtomIcon";
import { Edit, Trash2 } from "lucide-react";
import "../styles/components/cardCategoria.css"

function CardCategoria({ categoria }) {
    return (
        <div className="cardCategoria">
            <div className="categoriaHeader">
                <h2>{categoria.nomeCategoria}</h2>
                <h4>Por: {categoria.nameUser}</h4>
            </div>
            <div className="categoriaBody">
                <p>{categoria.descricao}</p>
                <div className="editar-excluir-categoria">
                    <ButtomIcon texto="Editar" className="editButton" icon={<Edit size={20} color="white"/>}/>
                    <ButtomIcon texto="Excluir" className="deleteButton" icon={<Trash2 size={20} color="white"/>}/>
                </div>
            </div>
        </div>
    )
}

export default CardCategoria;