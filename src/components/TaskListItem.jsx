import { RxCross2 } from "react-icons/rx";
import { Row, Col } from "react-bootstrap";

export function TaskListItem({todo, onDeleteTask}){
    return (
    
    <Row className="m-0 p-3 border">
        <Col xs={11} className="p-0">
            {todo}
        </Col>
        <Col xs={1} onClick={onDeleteTask} className="p-0 d-flex justify-content-center align-items-center">
            <RxCross2 />
        </Col>    
    </Row>
            
    );
}
