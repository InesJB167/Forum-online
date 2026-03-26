import { Search, User2 } from "lucide-react";
import Buttom from "./buttons/Buttom";
import "../styles/components/userList.css"
import InputIcon from "../components/inputs/InputSearch";
import CardUser from "../components/card/CardUser";
import { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
    const icons = [<User2 size={25} color="white" />, <Search size={30} color="grey" />];
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Função para buscar os usuários da API
        axios.get("http://localhost:5000/api/users/listar")
            .then(response => {
                console.log("Usuários buscados:", response.data);
                setUsers(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar usuários:", error);
            });
    }, []);

    return (
        <div className="userListContainer">
            <div className="UserListheader">
                <div className="textos">
                    <h1>Lista de Usuários</h1>
                    <p>Aqui você pode visualizar e gerenciar todos os usuários do sistema.</p>
                </div>
                <Buttom texto="Novo Usuário" className="addUserButton" icon={icons[0]} />
            </div>

            <InputIcon placeholder="Pesquisar usuários..." icon={icons[1]} />
            <div className="userList">
                {/* Aqui você pode mapear os usuários e renderizar os componentes de usuário */}
                {users.length === 0 ? (
                    <p>Nenhum usuário encontrado</p>
                ) : (
                    users.map(user => (
                        <CardUser key={user.idUser} user={user} />
                    ))
                )}
            </div>
        </div>
    );
}

export default UserList;