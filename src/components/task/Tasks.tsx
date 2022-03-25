import Task from './Task';
import { TaskObj } from './TaskInterfaces';

interface Props {
  tasks: TaskObj[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const Tasks: React.FC<Props> = ({ tasks, onDelete, onToggle }: Props) => {
  return (
    <>
      {tasks.map((task: TaskObj) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
};

export default Tasks;
