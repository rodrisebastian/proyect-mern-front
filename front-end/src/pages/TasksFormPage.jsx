import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc"; //Esta libreria formatea y manipula las fechas 
dayjs.extend(utc);

import '../assets/TaskFormPage.css'

function TasksFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => { //Obtiene los datos de la tarea desde la base de datos y actualiza los valores
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id); 
        console.log(task);
        setValue("title", task.title);
        setValue("description", task.descripcion);
        setValue("date", dayjs(task.date).utc().format("YYYY-MM-DD"));
      }
    }
    loadTask();
  }, [getTask, params.id, setValue]);

  const onSubmit = handleSubmit((data) => {
    const dataValid = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    };

    if (params.id) {
      updateTask(params.id, dataValid);
    } else {
      createTask(dataValid);
    }

    navigate("/tasks");
  });

  return (
    <div className="form-container">
      <form onSubmit={onSubmit}  className="task-form">
        <label htmlFor="title" className="form-label">Titulo</label>
        <input
          type="text"
          placeholder="Titulo"
          id="title"
          {...register("title")}
          autoFocus
          className="form-input"
        />

        <label htmlFor="description" className="form-label">Descripción</label>
        <textarea
          rows={3}
          placeholder="Decripcion"
          id="description"
          {...register("description")}
          className="form-textarea"
        ></textarea>

        <label htmlFor="date" className="form-label">Fecha</label>
        <input type="date" id="date" {...register("date")} className="form-input"/>

        <button className="form-button">Guardar</button>
      </form>
    </div>
  );
}

export default TasksFormPage;
