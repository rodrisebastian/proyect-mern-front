import instance from "./auth";

export const getTasksRequest = () => instance.get(`/tasks`);

export const getTaskRequest = (id) => instance.get(`/tasks/${id}`);

export const createTasksRequest = (task) => instance.post(`/tasks`, task);

export const updateTaskRequest = (id, task) =>
  instance.put(`/tasks/${id}`, task);

export const deleteTaskRequest = (id) => instance.delete(`/tasks/${id}`);
