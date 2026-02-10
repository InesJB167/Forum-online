import '../styles/components/reactionIcon.css'

function ReactionIcon({icon,number}){
    return(
        <>
        <div className="reaction">
            <p className="icon">{icon}</p>
            <p className="number">{number}</p>
        </div>
        </>
    );
}

export default ReactionIcon