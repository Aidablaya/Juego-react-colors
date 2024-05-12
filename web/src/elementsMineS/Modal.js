import React from "react";

import "../styles/elementsMineS/Modal.scss";

const Modal = ({ showModal, setShowModal }) => {
  if (!showModal) return null;

  const handleAccept = () => {
    setShowModal(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>¡Advertencia!</h2>
        <p>
        Estamos en época de ladrones, por favor guarda tus pertenencias si no quieres perderlas
        
        </p>
        <button onClick={handleAccept}>Aceptar</button>
      </div>
    </div>
  );
};

export default Modal;
