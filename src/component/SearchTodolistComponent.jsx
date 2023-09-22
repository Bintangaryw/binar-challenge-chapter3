import { useState } from "react";
import { Row, Col, Button, InputGroup, Form, Card } from "react-bootstrap";
import styles from "./TodolistComponent.module.css";
import PropTypes from "prop-types";

const SearchTodolistComponent = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      onAddTask(newTask); // Pass the new task to the parent component
      setNewTask(""); // Clear the input field after adding the task
    }
  };

  return (
    <div className={styles.searchbox}>
      <Card>
        <div className={styles.innersearchbox}>
          <Col>
            <Row>
              <h1>ToDo Input</h1>
            </Row>
            <Row>
              <Col md={10}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                  <Form.Control placeholder="Search todo.." aria-label="Search todo.." aria-describedby="basic-addon1" />
                </InputGroup>
              </Col>
              <Col md={2}>
                <Button variant="primary" size="lg" className={styles.buttonsearch}>
                  Search
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md={10}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Add</InputGroup.Text>
                  <Form.Control placeholder="Add todo.." aria-label="Add todo.." aria-describedby="basic-addon1" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                </InputGroup>
              </Col>
              <Col md={2}>
                <Button variant="primary" size="lg" onClick={handleAddTask}>
                  Add New Task
                </Button>
              </Col>
            </Row>
          </Col>
        </div>
      </Card>
    </div>
  );
};

SearchTodolistComponent.propTypes = {
  onAddTask: PropTypes.func,
};

export default SearchTodolistComponent;
