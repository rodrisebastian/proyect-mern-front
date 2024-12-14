import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

import "../assets/LoginPage.css";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  return (
    <div className="login-container">
      <div className="login-title">Inicio sesión</div>

      {signinErrors.map((error, i) => (
        <div className="error-message" key={i}>
          {error}
        </div>
      ))}

      <form onSubmit={onSubmit} className="login-form">
        <div className="input-group">
          <input
            type="text"
            {...register("email", { required: true })}
            placeholder="Correo electronico"
            className="input-field"
          />

          {errors.email && (
            <p className="error-text">El correo electronico es obligatorio</p>
          )}
        </div>

        <div className="input-group">
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Contraseña"
            className="input-field"
          />
          {errors.password && (
            <p className="error-text">La contraseña es obligatoria</p>
          )}
        </div>

        <button type="submit" className="submit-button">
          Iniciar sesión
        </button>
      </form>

      <p className="signup-link">
        No tienes una cuenta?{" "}
        <Link to="/register" className="link">
          Crear cuenta
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;
