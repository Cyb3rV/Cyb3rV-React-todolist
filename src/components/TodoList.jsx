import {useEffect, useState} from "react";
import {Container, Card, Row, Col} from 'react-bootstrap'
import {TaskInput} from "./TaskInput";
import {TaskList} from "./TaskList";
import { ReturnButton } from "./ReturnButton";

export function TodoList(){
    
    const [todos, setTodos] = useState(["Buy groceries", "Walk dog"]);
    const [task, setTask] = useState("");
    const [todosVersion, setTodosVersion] = useState([]);

    const handleAddTask = () => {
        //Code to add new task.
        if(task.trim() !== ""){
            if(!todos.some(todo => todo === task.trim())){
                const newTodos = [task.trim(), ...todos];
                setTodos(newTodos);
                setTask("");
            }
            else{
                alert("Cannot duplicate a task");
            }
        }
        else{
            alert("Enter a valid task");
        }
    }

    const handleDeleteTaskIndex = (indexToRemove) => {
        //alert("Delete" + index);
        //const newArray = [...todos.slice(0, index), ...todos.slice(index+1)];
        const newArray = todos.filter((_,index) => index !== indexToRemove);
        setTodos(newArray);
    };

    const handleBack = () => {
        const newVersion = [...todosVersion];
        newVersion.pop();
        const last = newVersion.pop();
        setTodosVersion(newVersion);
        setTodos(last);
    }

    useEffect(() => {
        // console.log(todos);
        // console.log(todosVersion);
        setTodosVersion([...todosVersion, [...todos]]);
        // console.log(todosVersion);
    }, [todos]);


    return (
        <>
            <Container style={{ maxWidth: "600px" }}>
                    <h1 className="text-center">TODOS</h1>
                    <Card className="p-0" bg={'light'}>
                        <TaskInput task={task} onTaskChange={setTask} onAddTask={handleAddTask} />
                        <TaskList todos={todos} onDeleteTaskIndex={handleDeleteTaskIndex} />
                        <ReturnButton handleBack={handleBack} todos={todos} />                   
                    </Card>
            </Container>
        </>
    );
}
