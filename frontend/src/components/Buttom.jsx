import '../styles/components/buttom.css'

function Buttom({texto,type,icon,className,id}){
    return (
        <>
        <button type={type} className={className} id='id'>{icon} <p>{texto}</p></button>
        </>
    );
}

export default Buttom