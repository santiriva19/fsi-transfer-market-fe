import { useState } from "react";
import "./Task.css";
function Task(props) {
  const { task, handleDelete } = props;

  const [amout, setAmount] = useState(0);

  const handleOperation = (operationType) => {
    if (operationType === "sum") {
      setAmount(amout + 1);
    } else if (amout > 0) {
      setAmount(amout - 1);
    }
  };
  return (
    <div className="task-card">
      <p>{task.name}</p>
      <button onClick={() => handleDelete(task)}>Delete</button>
      <div className="operation-container">
        <button onClick={() => handleOperation("sub")} disabled={amout === 0}>
          -
        </button>
        <p>{amout}</p>
        <button onClick={() => handleOperation("sum")} handleOperation>
          +
        </button>
      </div>
    </div>
  );
}

export default Task;
