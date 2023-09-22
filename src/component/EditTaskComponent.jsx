// EditTaskComponent.jsx
import { useState } from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const EditTaskComponent = ({ taskId, taskText, onSave }) => {
  const [editedText, setEditedText] = useState(taskText);

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleSave = () => {
    onSave(taskId, editedText);
  };

  return (
    <div>
      <input type="text" value={editedText} onChange={handleInputChange} />
      <Button variant="primary" onClick={handleSave} onChange={handleInputChange}>
        Save
      </Button>
    </div>
  );
};
EditTaskComponent.propTypes = {
  taskId: PropTypes.any,
  taskText: PropTypes.any,
  onSave: PropTypes.any,
};

export default EditTaskComponent;
