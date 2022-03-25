export interface TaskObj {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
}

export interface TaskRequest {
  text: string;
  day: string;
  reminder: boolean;
}
