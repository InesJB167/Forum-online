import '../styles/components/buttom.css'

function Buttom({texto,type}){
    return (
        <>
        <button type={type}>{texto}</button>
        </>
    );
}

export default Buttom