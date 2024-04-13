import {Row, Col} from 'react-bootstrap'
import { FaUndo } from "react-icons/fa";

export function ReturnButton({handleBack, todos}){

    return(
        <Row className="m-0 p-3">
            <Col xs={1} className="p-0" onClick={handleBack}>
                <FaUndo />
            </Col>
            <Col xs={11}>
                <a>{todos.length} item left</a>
            </Col>
        </Row>
    );
}