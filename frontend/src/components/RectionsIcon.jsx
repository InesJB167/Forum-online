import '../styles/components/reactionIcon.css'

function ReactionIcon({icon,number}){
    return(
        <>
        <div className="reaction">
            <button className="icon">{icon}</button>
            <p className="number">{number}</p>
        </div>
        </>
    );
}

export default ReactionIcon