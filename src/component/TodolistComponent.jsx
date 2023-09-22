import { Container, Row, Col } from "react-bootstrap";
import styles from "./TodolistComponent.module.css";

function TodolistComponent() {
  return (
    <Container className="d-flex  justify-content-center align-items-center">
      <div className={styles.container}>
        <Col>
          {/* To Do List */}
          <Col className="">
            <Row className="text-center">
              <h1>ToDoList</h1>
            </Row>
          </Col>
        </Col>
      </div>
    </Container>
  );
}

export default TodolistComponent;
