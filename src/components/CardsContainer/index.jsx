import './index.css'
import { useEffect, useState } from 'react'
import Card from '../Card';
import { uniqueId } from '../../utils';

function CardsContainer(){
    const [showCardForm, setShowCardForm] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [activeTasks, setActiveTasks] = useState();
    const [doneTasks, setDoneTasks] = useState();

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

    const updateCard = (id, statusToUpdate) => {
        const indexObject = tasks.findIndex((obj) => obj.id === id);
        tasks[indexObject].status = statusToUpdate;
        setTasks((prevState) => [
            ...prevState
        ]);
    }
    
    const countActiveAndDoneTasks = () => {
        const activeTasks = tasks.filter((task) => {
            return (task.status.toUpperCase() === 'ACTIVE')
        }).length;
        const doneTasks = tasks.filter((task) => {
            return (task.status.toUpperCase() === 'DONE')
        }).length;
        return {
            activeTasks,
            doneTasks,
        }
    }
    // function countDoneTasks = () => {

    // };

    useEffect(() => {
        console.log(tasks);
        const result = countActiveAndDoneTasks();
        setActiveTasks(result.activeTasks);
        setDoneTasks(result.doneTasks);

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
                    onUpdateCard = {updateCard}
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
            <div className='statsContainer'>
                <span>Active {activeTasks}</span>
                <span>Done {doneTasks}</span>
            </div>
        </>
    );
}

export default CardsContainer;