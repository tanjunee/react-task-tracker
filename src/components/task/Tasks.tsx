import { TaskModel } from '../../App';
import Task from './Task';

interface Props {
  tasks: TaskModel[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const Tasks: React.FC<Props> = ({ tasks, onDelete, onToggle }: Props) => {
  return (
    <>
      {tasks.map((task: TaskModel) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
};

export default Tasks;
