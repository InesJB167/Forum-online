import '../styles/components/reactionIcon.css'

function ReactionIcon({icon,number,clique,className,id}){
    return(
        <>
        <div className="reaction">
            <button className={`icon ${className}`}
            onClick={clique} id={id}>{icon}</button>
            <p className="number">{number}</p>
        </div>
        </>
    );
}

export default ReactionIcon