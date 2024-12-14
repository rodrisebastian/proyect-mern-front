import '../assets/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Proyecto MERN. Todos los derechos reservados.</p>
        <p>
          <a href="/privacy-policy">Política de privacidad</a> | <a href="/terms">Términos y condiciones</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
