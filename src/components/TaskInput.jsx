import { TiPlus } from "react-icons/ti";
import {Row, Col, Form} from "react-bootstrap";

export function TaskInput({task, onTaskChange, onAddTask}){
    return (
        <Row className="m-0 p-3 justify-content-between">
            <Col xs={10} className="p-0">
                <Form.Control className="p-0 border-0 shadow-none bg-transparent" value={task} onChange={(ev) => onTaskChange(ev.target.value)} />
            </Col>
            <Col xs={1} onClick={onAddTask} className="p-0 d-flex justify-content-center align-items-center">
                <TiPlus />
            </Col>
        </Row>
    );
}