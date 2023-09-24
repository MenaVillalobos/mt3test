import './index.css'
import { useEffect, useState } from 'react'

function CardsContainer(){
    const [showCardForm, setShowCardForm] = useState(false);
    const [tasks, setTasks] = useState([]);

    const createTaskForm = (event) => {
        event.preventDefault();
        tasks.push({})
        console.log(event.target.priority.value);
        console.log(event.target.text.value);
        console.log(event.target.status.value);
    };
    return(
        <>
            <div className='gralContainer'>
                <div>
                    <button onClick={() => setShowCardForm(true)}>+</button>
                </div>
            
            {showCardForm &&             
                (<div>
                <form className='cardsForm' onSubmit={(e) => createTaskForm(e)}>
                    <label>Priority</label>
                    <input name='priority'></input>
                    <label>Text</label>
                    <input name='text'></input>
                    <label>Status</label>
                    <select name='status'>
                        <option value={"Active"}>Active</option>
                        <option value={"Done"}>Done</option>
                        <option value={"Delete"}>Delete</option>
                    </select>
                    <button className='createBtn' type='submit'>Create</button>
                </form>
            </div>)}
            </div>
        </>
    );
}

export default CardsContainer;