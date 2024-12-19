# proyect-mern-front
Este proyecto frontend forma parte de una aplicación construida con MongoDB, Express, React y Node.js. El frontend está desarrollado utilizando React y se encarga de administrar las operaciones principales del sistema como el registro y el inicio de sesión de los usuarios, la administración de tareas y la protección de rutas privadas.
La aplicacion esta disponible en el port:
http://localhost:4000/api 
Repositorio back-end: https://github.com/rodrisebastian/proyecto-mern.git

Hooks y Servicios=
useEffect: verifica si hay un token en las cookies al montar el componente.
useContext: se utiliza para acceder al contexto de autenticacion y de tareas.
En TaskContext se utilizan estados para manejar las tareas.

Algunos servicios estan relacionados con la autenticacion como registerRequest(user), loginRequest(user), y verifyTokenRequest. Otros estan relacionados a las tareas como getTasksRequest(), getTaskRequest(id), createTasksRequest(task), updateTaskRequest(id, task) y deleteTaskRequest(id).
