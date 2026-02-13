import '../styles/components/perfilUser.css'
import InputGroup from "../components/InputGrourp"
import SelectGroup from "../components/SelectGroup"
import Buttom from "../components/Buttom"


function PerfilUser(){
    return(
        <>
        <div className="editarPerfil">
               <h2 className='dadosP'>Dados pessoais</h2>
                <InputGroup label='Nome:' type='text' className='inputUser' id='nome'/>
                <InputGroup label='Username:' type='text' id='nomeUser' className='inputUser'/>
                <InputGroup label='Email:' type='email' id='email' className='inputUser'/>
                <SelectGroup label='Gênero:' id='genero' option1='Masculino' option2='Feminino' className='inputUser' />
                <div className="bio">
                    <label htmlFor="bio">Bio:</label>
                    <textarea name="bio" id="bio"></textarea>
                </div>
                <Buttom texto='Salvar alterações' type='submit' className='btnAlterar' />
            </div>
        </>
    );
}

export default PerfilUser