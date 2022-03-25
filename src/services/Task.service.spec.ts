import axios from 'axios';
import { TaskObj, TaskRequest } from '../components/task/TaskInterfaces';
import { getMockTask } from '../utils/TestUtils';
import { addTask, deleteTask, fetchTask, fetchTasks, updateTask } from './Task.service';

jest.mock('axios');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockAxios = axios as jest.Mocked<any>;

describe('Task Service', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should fetch tasks', async () => {
    mockAxios.get.mockResolvedValue({ data: [getMockTask(true)] });

    const tasks = await fetchTasks();

    expect(tasks.length).toEqual(1);
    expect(tasks[0].id).toEqual(1);
    expect(tasks[0].text).toEqual('Doctors Appointment');
  });

  it('should fetch task', async () => {
    mockAxios.get.mockResolvedValue({ data: getMockTask(true) });

    const task = await fetchTask(1);

    expect(task.id).toEqual(1);
    expect(task.text).toEqual('Doctors Appointment');
  });

  it('should delete task', async () => {
    mockAxios.delete.mockResolvedValue({ data: {} });

    const task = await deleteTask(1);

    expect(task).toEqual({});
  });

  it('should add task', async () => {
    const text = 'New Task';
    const day = '17 March 2022';
    const reminder = true;

    const createdTask = {
      id: 2,
      text: text,
      day: day,
      reminder: reminder
    };

    const req: TaskRequest = {
      text: text,
      day: day,
      reminder: reminder
    };

    mockAxios.post.mockResolvedValue({ data: createdTask });

    const task = await addTask(req);

    expect(task.id).toEqual(2);
    expect(task.text).toEqual(text);
  });

  it('should update task', async () => {
    const updatedTask: TaskObj = {
      id: 1,
      text: 'Grocery Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    };

    mockAxios.put.mockResolvedValue({ data: updatedTask });
    const task = await updateTask(1, updatedTask);

    expect(task.id).toEqual(1);
    expect(task.text).toEqual('Grocery Shopping');
  });
});
