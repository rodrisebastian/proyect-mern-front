import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

import "../assets/LoginPage.css"

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signinErrors } = useAuth();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

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
            type="email"
            {...register("email", { required: true })}
            placeholder="Correo electrónico"
            className="input-field"
          />
          {errors.email && (
            <p className="error-text">El email es obligatorio</p>
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
