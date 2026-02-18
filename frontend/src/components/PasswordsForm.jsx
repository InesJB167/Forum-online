import Buttom from "./buttons/Buttom";
import InputGroup from "./inputs/InputGrourp";
import '../styles/components/passwordForm.css'

function PasswordsForm(){
    return(
        <>
        <div className="areaSegura">
            <h3 className="titulo">Área de segurança</h3>
            <InputGroup label='Senha atual:' type='password' id='senha'/>
            <InputGroup label='Nova senha:' type='password' id='senhaN'/>
            <InputGroup label='Confirmar senha:' type='password' id='senhaC'/>
            <Buttom texto='Alterar senha' type='submit' className='btnAlterar'/>
        </div>
        </>
        
    );
}

export default PasswordsForm