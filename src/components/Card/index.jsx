import './index.css'


function Card({id, priority, text, status, onUpdateCard}){

    return(
        <>
            <div className='card'>
                <div className='deleteButtonContainer'>
                    <button onClick={() => onUpdateCard(id, 'DELETED')} className='close'>x</button>
                </div>
                <div>{priority}</div>
                <div>{text}</div>
                <div>{status}</div>
                <button onClick={() => onUpdateCard(id, 'DONE')}>Done ✅</button>
            </div>
        </>
    )
}

export default Card;