import React from 'react';
import {
  backGroundLayer2,
  backGroundLayer1,
  backGroundLayer3,
} from './stylesBGImages.module.css';
import stripImg from '../../img/Rectangle4.png';
import topImg from '../../img/Shape1.png';
import bottomImg from '../../img/Shape2.png';

const BGImages = () => (
  <>
    <div className={backGroundLayer1}>
      <img src={topImg} alt="" />
    </div>
    <div className={backGroundLayer2}>
      <img src={stripImg} alt="" />
    </div>
    <div className={backGroundLayer3}>
      <img src={bottomImg} alt="" />
    </div>
  </>
);

export default BGImages;
