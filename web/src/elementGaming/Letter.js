import React from "react";
import '../styles/elementsGaming/Letter.scss';
import letter from '../images/carta.png'


const  Letter = ({ showLetter, setShowLetter }) => {
  if (!showLetter) return null;

  const handleAccept = () => {
    setShowLetter(false);
  };

  return (
    <div >
      <div className="boxLetter">
        <div className="boxLetter__box"> <img className="boxLetter__box--img" src={letter} alt="" /></div>
        <h2 className="boxLetter__title">¡Urgente!</h2>
        <div className="boxLetter__text">
          <p className="boxLetter__text--par">
          Debe volver inmediatamente de sus vacaciones como druida, nos hemos vuelto a quedar sin color.
          Ya sabe, eso que sabe hacer, primero busca ingredientes en el bosque, luego los mezcla en su caldero y al pozo ;). 

          <p><br />Atentamente: La alcaldesa</p>
          
          </p>

        </div>
        
        <button onClick={handleAccept}>Aceptar</button>
      </div>
    </div>
  );
};

export default Letter;