import './index.css'


function Card({id, priority, text, status, onDeleteCard}){

    return(
        <>
            <div className='card'>
                <div className='deleteButtonContainer'>
                    <button onClick={() => onDeleteCard(id)} className='close'>x</button>
                </div>
                <div>{priority}</div>
                <div>{text}</div>
                <div>{status}</div>
                <button>Done ✅</button>
            </div>
        </>
    )
}

export default Card;