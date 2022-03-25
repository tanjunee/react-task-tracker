import axios from 'axios';
import { TaskObj, TaskRequest } from '../components/task/TaskInterfaces';

const BASE_URL = 'http://localhost:5000/tasks';

export const fetchTasks = async (): Promise<TaskObj[]> => {
  const { data } = await axios.get<TaskObj[]>(BASE_URL);
  return data;
};

export const fetchTask = async (id: number): Promise<TaskObj> => {
  const { data } = await axios.get<TaskObj>(`${BASE_URL}/${id}`);
  return data;
};

export const deleteTask = async (id: number): Promise<TaskObj> => {
  const { data } = await axios.delete(`${BASE_URL}/${id}`);
  return data;
};

export const addTask = async (task: TaskRequest): Promise<TaskObj> => {
  const { data } = await axios.post(BASE_URL, task);
  return data;
};

export const updateTask = async (id: number, task: TaskObj): Promise<TaskObj> => {
  const { data } = await axios.put(`${BASE_URL}/${id}`, task);
  return data;
};
