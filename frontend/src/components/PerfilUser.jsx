import '../styles/components/perfilUser.css'
import InputGroup from "../components/inputs/InputGrourp"
import SelectGroup from "../components/inputs/SelectGroup"
import Buttom from "../components/buttons/Buttom"
import { useEffect, useState } from 'react'
import api from '../services/api'

function PerfilUser() {

    const [nome, setNome] = useState("");
    const [nameUser, setNameUser] = useState("");
    const [email, setEmail] = useState("");
    const [genero, setGenero] = useState("");
    const [bio, setBio] = useState("");

    const [erro, setErro] = useState("");

    //permitir o controle da ediçao
    const [editavel, setEditavel] = useState(false);

    useEffect(() => {
        const dadosUser = async () => {
            try {
                const resposta = await api.get("/user/perfil", {
                    headers: {
                        //pegando o token
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });

                //pegar cada dado
                setNome(resposta.data.nome);
                setEmail(resposta.data.email);
                setGenero(resposta.data.genero);
                setBio(resposta.data.bio);
                setNameUser(resposta.data.nameUser);

            } catch (error) {
                console.log("Erro ao buscar perfil:", error);
                setErro("Não foi possível carregar os dados do usuário");
            }
        }

        dadosUser();
    }, []);


    //desenvolvendo funçao para editar dados do user 
    function editarPerfil() {
        setEditavel(true);
    }

    async function salvarAlteracoes() {
        const dados = {
            nome,
            nameUser,
            email,
            genero,
            bio
        };

        try {
            const resposta = await api.put("/perfil/atualizar", dados, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });

            alert(resposta.data.message)

        } catch (error) {
            alert("Erro ao atualizar perfil");
        }


    }
    return (
        <>
            <div className="editarPerfil">
                {erro && <p>{erro}</p>}
                <h2 className='dadosP'>Dados pessoais</h2>
                <InputGroup label='Nome:' type='text' value={nome} onChange={(e) => setNome(e.target.value)} className='inputUser' id='nome' editavel={!editavel} />

                <InputGroup label='Username:' type='text' value={nameUser} onChange={(e) => setNameUser(e.target.value)} id='nomeUser' className='inputUser' editavel={!editavel} />

                <InputGroup label='Email:' type='email' value={email} onChange={(e) => setEmail(e.target.value)} id='email' className='inputUser' editavel={!editavel} />

                <SelectGroup
                    label='Gênero:'
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
                    id='genero'
                    options={['Masculino', 'Feminino']}
                    className='inputUser' editavel={!editavel}
                />

                <div className="bio">
                    <label htmlFor="bio">Bio:</label>
                    <textarea name="bio" value={bio} onChange={(e) => setBio(e.target.value)} id="bio" disabled={!editavel}></textarea>
                </div>
                <div className="botoes">
                    <Buttom texto='Editar Perfil' type='button' className='btnAlterar' onClick={editarPerfil} />
                    <Buttom texto='Salvar Alterações' type='button' className='btnAlterar' onClick={salvarAlteracoes} />
                </div>
            </div>
        </>
    );
}

export default PerfilUser