// ButtonTableComponent.jsx
import { Button, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const ButtonTableComponent = ({ onDoneClick, onDeleteClick, isCompleted, onEditClick }) => {
  return (
    <Row>
      <Col>
        <Button variant="success" onClick={onDoneClick}>
          {isCompleted ? "Undone" : "Done"}
        </Button>
      </Col>
      <Col>
        <Button variant="primary" onClick={onEditClick}>
          Edit
        </Button>
      </Col>
      <Col>
        <Button variant="danger" onClick={onDeleteClick}>
          Delete
        </Button>
      </Col>
    </Row>
  );
};
ButtonTableComponent.propTypes = {
  onDoneClick: PropTypes.any,
  onDeleteClick: PropTypes.any,
  isCompleted: PropTypes.any,
  onEditClick: PropTypes.any,
};

export default ButtonTableComponent;
