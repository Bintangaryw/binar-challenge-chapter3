import { useState } from "react";
import { ListGroup, Row, Col, Button, Container } from "react-bootstrap";
import styles from "./TodolistComponent.module.css";
import ButtonTableComponent from "./ButtonTableComponent";
import settodolist from "../data/setTodoList.json";
import EditTaskComponent from "./EditTaskComponent";
import SearchTodolistComponent from "./SearchTodolistComponent";

const TableTodolistComponent = () => {
  const [todoList, setTodoList] = useState(settodolist);
  const [filter, setFilter] = useState("All"); // Initialize with "All"

  const addTask = (newTask) => {
    const newTodo = {
      id: Math.random(), // Generate a unique ID (not recommended for production)
      task: newTask,
      complete: false,
    };
    setTodoList([...todoList, newTodo]);
  };

  const markAsComplete = (id) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  const deleteTask = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  const deleteAllDoneTasks = () => {
    const updatedTodoList = todoList.filter((todo) => !todo.complete);
    setTodoList(updatedTodoList);
  };

  const deleteAllTasks = () => {
    setTodoList([]); // Remove all tasks
  };
  const [editingTaskId, setEditingTaskId] = useState(null);

  const editTask = (id) => {
    setEditingTaskId(id);
  };

  const saveEditedTask = (id, editedText) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: editedText };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
    setEditingTaskId(null); // Clear the editing state
  };

  const filteredTodoList = filter === "Done" ? todoList.filter((todo) => todo.complete) : filter === "Undone" ? todoList.filter((todo) => !todo.complete) : todoList; // Default: "All"

  return (
    <Container>
      <div>
        <Col>
          <Row>
            <SearchTodolistComponent onAddTask={addTask} />
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <div className="mb-3">
                <Button variant="primary" onClick={() => setFilter("All")} className={filter === "All" ? "active" : ""}>
                  All Task
                </Button>{" "}
                <Button variant="success" onClick={() => setFilter("Done")} className={filter === "Done" ? "active" : ""}>
                  Done Task
                </Button>{" "}
                <Button variant="warning" onClick={() => setFilter("Undone")} className={filter === "Undone" ? "active" : ""}>
                  Undone Task
                </Button>{" "}
              </div>
            </Col>
          </Row>
          <Row>
            <ListGroup className={styles.tabletodolist}>
              {filteredTodoList.map((todo) => (
                <ListGroup.Item key={todo.id} className={todo.complete ? styles.completed : ""}>
                  <Row>
                    <Col>{editingTaskId === todo.id ? <EditTaskComponent taskId={todo.id} taskText={todo.task} onSave={saveEditedTask} /> : <span className={todo.complete ? styles.strikethrough : ""}>{todo.task}</span>}</Col>
                    <Col className="d-flex justify-content-end">
                      {editingTaskId === todo.id ? (
                        <button onClick={() => setEditingTaskId(null)}>Cancel</button>
                      ) : (
                        <ButtonTableComponent
                          onDoneClick={() => markAsComplete(todo.id)}
                          onDeleteClick={() => deleteTask(todo.id)}
                          isCompleted={todo.complete}
                          taskId={todo.id}
                          onEditClick={() => editTask(todo.id)} // Add this prop
                        />
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <div className="mb-3">
                <Button variant="danger" onClick={deleteAllDoneTasks}>
                  All Done Task Delete
                </Button>{" "}
                <Button variant="danger" onClick={deleteAllTasks}>
                  All Task Delete
                </Button>{" "}
              </div>
            </Col>
          </Row>
        </Col>
      </div>
    </Container>
  );
};

export default TableTodolistComponent;
