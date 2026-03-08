import '../styles/components/perfilUser.css'
import InputGroup from "../components/inputs/InputGrourp"
import SelectGroup from "../components/inputs/SelectGroup"
import Buttom from "../components/buttons/Buttom"
import { useEffect, useState } from 'react'
import api from '../services/api'

function PerfilUser(){
    const [nome,setNome] = useState("");
    const [nameUser,setNameUser] = useState("");
    const [email,setEmail] = useState("");
    const [genero,setGenero] = useState("");
    const [bio,setBio] = useState("");

    const [erro,setErro] = useState("");

    useEffect(()=>{
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
    } ,[]);
    return(
        <>
        <div className="editarPerfil">
            {erro && <p>{erro}</p>}
               <h2 className='dadosP'>Dados pessoais</h2>
                <InputGroup label='Nome:' type='text' value={nome} onChange={(e)=>setNome(e.target.value)} className='inputUser' id='nome'/>

                <InputGroup label='Username:' type='text' value={nameUser} onChange={(e)=>setNameUser(e.target.value)} id='nomeUser' className='inputUser'/>

                <InputGroup label='Email:' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} id='email' className='inputUser'/>

                <SelectGroup
                    label='Gênero:'
                    value={genero}
                    onChange={(e)=>setGenero(e.target.value)}
                    id='genero'
                    options={['Masculino','Feminino']}
                    className='inputUser'
                    />

                <div className="bio">
                    <label htmlFor="bio">Bio:</label>
                    <textarea name="bio" value={bio} onChange={(e)=>setBio} id="bio"></textarea>
                </div>
                <Buttom texto='Salvar alterações' type='submit' className='btnAlterar' />
            </div>
        </>
    );
}

export default PerfilUser