import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../assets/NavBar.css";

function NavBar() {
  const { isAuthenticated, logout, user } = useAuth();
  return (
    <nav className="navbar">
      <Link to={isAuthenticated ? "/tasks" : "/"} className="navbar-logo">
        <h1>Administrador de tareas</h1>
      </Link>
      <ul className="navbar-links">
        {isAuthenticated ? (
          <>
            <li className="navbar-welcome">{user ? `Bienvenido ${user.username}` : 'Cargando...'}</li>
            <li className="navbar-item">
              <Link to="/add-tasks" className="navbar-link">
                Agregar tarea
              </Link>
            </li>
            <li className="navbar-item">
              <button
                className="navbar-logout"
                onClick={() => {
                  logout();
                }}
              >
                Cerrar sesión
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="navbar-item">
              <Link to="/login" className="navbar-link">
                Inicio sesión
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/register" className="navbar-link">
                Registro
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
