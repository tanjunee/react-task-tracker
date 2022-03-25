import { TaskModel } from '../../App';
import { FaTimes } from 'react-icons/fa';

interface Props {
  task: TaskModel;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const Task: React.FC<Props> = ({ task, onDelete, onToggle }: Props) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text}{' '}
        <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
