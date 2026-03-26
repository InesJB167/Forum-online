import { UserCircle2 } from "lucide-react";
import ButtomIcon from "../buttons/ButtomIcon";
import { Edit, Trash2 } from "lucide-react";
import "../styles/components/cardUser.css"

function CardUser({user}) {
    return(
            <div className="cardUser">
                <div className="cardUserHeader">
                    <UserCircle2 size={40} color="white"/>
                    <div className="cardUserInfo">
                        <h2>{user.nameUser}</h2>
                        <h4>Role: {user.role}</h4>
                    </div>
                </div>
                <div className="cardUserBody">
                    <p>Email: {user.email}</p>
                    <p>Data de Registro: {user.dataRegistro}</p>
                    <p>Estado: {user.estado}</p>
                    <div className="editar-excluir-user">
                        <ButtomIcon texto="Editar" className="editButton" icon={<Edit size={20} color="white"/>}/>
                        <ButtomIcon texto="Excluir" className="deleteButton" icon={<Trash2 size={20} color="white"/>}/>
                    </div>

                </div>

            </div>
    );
}

export default CardUser;