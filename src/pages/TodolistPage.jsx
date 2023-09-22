import TodolistComponent from "../component/TodolistComponent";
import TableTodolistComponent from "../component/TableTodolistComponent";
import { Container, Col, Row, Card } from "react-bootstrap";

const TodolistPage = () => {
  return (
    <Container>
      <Card>
        <Col>
          <Row>
            <TodolistComponent />
            <TableTodolistComponent />
          </Row>
        </Col>
      </Card>
    </Container>
  );
};

export default TodolistPage;
