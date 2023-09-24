import './index.css'


function Card({priority, text, status}){

    return(
        <>
            <div className='card'>
                <div>{priority}</div>
                <div>{text}</div>
                <div>{status}</div>
            </div>
        </>
    )
}

export default Card;