import React from 'react';
import PropTypes from 'prop-types';

import {
  card,
  cardStat,
  statToday,
  statLikes,
  statComments,
  statOnDate,
} from './stylesGreidMode.module.css';

const GridMode = ({ img }) => (
  <div className={card} style={{ backgroundImage: `url(${img})` }}>
    <div className={cardStat}>
      <div className={statToday}>
        <p>Today</p>
        <div>
          <span className={statLikes}>128</span>
          <span className={statComments}>31</span>
        </div>
      </div>
      <div className={statOnDate}>
        <p>9-08-2016</p>
        <div>
          <span className={statLikes}>67</span>
          <span className={statComments}>22</span>
        </div>
      </div>
      <div>Image upload: 11-04-2016 </div>
    </div>
  </div>
);

GridMode.propTypes = {
  img: PropTypes.string.isRequired,
};

export default GridMode;
