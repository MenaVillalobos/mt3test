import './index.css'


function Card({id, priority, text, status, onUpdateCard}){

    return(
        <>
            <div className='card'>
                <div className='deleteButtonContainer'>
                    <button onClick={() => onUpdateCard(id, 'DELETED')} className='close'>x</button>
                </div>
                <div className='priorityDiv'>Priority: {priority}</div>
                <div className='textDiv'>{text}</div>
                <div className='statusDiv'>Status: {status}</div>
                <button className='doneButton' onClick={() => onUpdateCard(id, 'DONE')}>Done ✅</button>
            </div>
        </>
    )
}

export default Card;