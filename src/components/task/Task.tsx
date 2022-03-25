import { FaTimes } from 'react-icons/fa';
import { TaskObj } from './TaskInterfaces';

interface Props {
  task: TaskObj;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const Task: React.FC<Props> = ({ task, onDelete, onToggle }: Props) => {
  return (
    <div
      data-testid="task"
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text}
        <FaTimes
          data-testid="delete-icon"
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
