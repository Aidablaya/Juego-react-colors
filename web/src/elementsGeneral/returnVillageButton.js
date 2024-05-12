import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/elementsGeneral/ReturnToVillageButton.scss';
import returnVillage from '../images/returnVillage.png';

const ReturnToVillageButton = () => {
  return (
    <button className="button">
      <Link to="/Gaming">  <img className='button__img' src={returnVillage} alt="" /></Link>
    </button>
  );
};

export default ReturnToVillageButton;