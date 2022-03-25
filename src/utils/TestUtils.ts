import { TaskObj } from '../components/task/TaskInterfaces';

export const getMockTask = (reminder: boolean): TaskObj => {
  return { id: 1, text: 'Doctors Appointment', day: 'Feb 5th at 2:30pm', reminder: reminder };
};
