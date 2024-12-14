import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import '../assets/LoginPage.css'

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => { //Si el usuario esta autenticado, redirige a la pagina de tareas
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="login-container">
      <div className="login-title">Registro</div>
      {registerErrors.map((error, i) => (
        <div className="error-message" key={i}>{error}</div>
      ))}

      <form onSubmit={onSubmit} className="login-form">
      <div className="input-group">
        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="Nombre de usuario"
          className="input-field"
        />

        {errors.username && <p className="error-text">El nombre es obligatorio</p>}
      </div>

      <div className="input-group">
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Correo electronico"
          className="input-field"
        />

        {errors.email && <p className="error-text">El email es obligatorio</p>}
      </div>

      <div className="input-group">
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Contraseña"
          className="input-field"
        />

        {errors.password && <p className="error-text">La contraseña es obligatoria</p>}
      </div>

        <button type="submit" className="submit-button">Registrar</button>
      </form>

      <p className="signup-link">
        Ya tienes una cuenta? <Link to="/login"  className="link">Ingresar</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
