import { TaskListItem } from "./TaskListItem";
export function TaskList({todos, onDeleteTaskIndex}){


    return (
        todos.map((todo, index) => {
            return(
                <TaskListItem key = {todo} todo = {todo} onDeleteTask ={() => onDeleteTaskIndex(index)}/>
            );
        })
    )
    ;
}