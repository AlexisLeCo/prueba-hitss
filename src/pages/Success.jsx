import "./Success.css";

function Success({ restart }) {
  return (
    <div className="success-container">
      <div className="success-card">
        <div className="success-icon">
          ✓
        </div>

        <h1>
          Has finalizado tu proceso exitosamente
        </h1>

        <h2>
          Bienvenido a tu nuevo Servicio de Claro
        </h2>

        <p>
          Enviaremos a tu correo electrónico una copia
          del contrato que acabas de diligenciar y los
          pasos a seguir para la activación de tu plan.
        </p>

        <button
          className="success-button"
          onClick={restart}
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  );
}

export default Success;