import './index.css'
import { useEffect, useState } from 'react'
import Card from '../Card';

function CardsContainer(){
    const [showCardForm, setShowCardForm] = useState(false);
    const [tasks, setTasks] = useState([]);

    const createTaskForm = (event) => {
        event.preventDefault();
        const {priority, text, status} = event.target;
        setTasks((prevState) => [
            ...prevState,
            {
                priority: priority.value,
                text: text.value,
                status: status.value
            }
        ])
        console.log(event.target.priority.value);
        console.log(event.target.text.value);
        console.log(event.target.status.value);
        console.log(tasks);
    };
    return(
        <>
            <div className='gralContainer'>
                <div>
                    <button onClick={() => setShowCardForm(true)}>+</button>
                </div>
                {tasks.length > 0 && tasks.map(task => (
                    <Card
                        priority = {task.priority}
                        text = {task.text}
                        status = {task.status}
                    ></Card>
                ))}
            </div>
            <div className='formContainer'>
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