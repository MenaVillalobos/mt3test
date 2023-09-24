import './index.css'
import { useEffect, useState } from 'react'
import Card from '../Card';
import { uniqueId } from '../../utils';

function CardsContainer(){
    const [showCardForm, setShowCardForm] = useState(false);
    const [tasks, setTasks] = useState([]);

    const createTaskForm = (event) => {
        event.preventDefault();
        const {priority, text, status} = event.target;
        setTasks((prevState) => [
            ...prevState,
            {
                id: uniqueId(),
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

    const deleteCard = (id) => {
        const indexObject = tasks.findIndex((obj) => obj.id === id);
        tasks[indexObject].status = 'DELETED';
        setTasks((prevState) => [
            ...prevState
        ]);
    }

    useEffect(() => {
        console.log(tasks);
    }, [tasks]);

    return(
        <>
            <div className='gralContainer'>
                <div>
                    <button onClick={() => setShowCardForm(true)}>+</button>
                </div>
                {tasks.length > 0 && tasks.map(task => {
                    return task.status !== 'DELETED' && task.status !== 'DONE' && (<Card
                    id = {task.id}
                    priority = {task.priority}
                    text = {task.text}
                    status = {task.status}
                    onDeleteCard = {deleteCard}
                ></Card>)
                })}
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
                        </select>
                        <button className='createBtn' type='submit'>Create</button>
                    </form>
                </div>)}
            </div>
        </>
    );
}

export default CardsContainer;