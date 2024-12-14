import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

import '../assets/TaskCard.css'

function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <div className="task-card">
      <header>
        <h1>{task.title}</h1>
        <div>
          <Link to={`/tasks/${task._id}`} className="button-link">Editar</Link>
          <button
            onClick={() => {
              deleteTask(task._id);
            }}
          >
            Eliminar
          </button>
        </div>
      </header>
      
      <div className="task-description">
      <h1>{task.description}</h1>
      </div>
      <p>{dayjs(task.date).utc().format("DD/MM/YYYY")}</p>
    </div>
  );
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskCard;
