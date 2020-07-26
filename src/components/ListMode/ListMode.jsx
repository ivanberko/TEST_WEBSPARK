import React from 'react';
import PropTypes from 'prop-types';

import {
  card,
  cardStat,
  statToday,
  statLikes,
  statComments,
  statOnDate,
  statUpload,
} from './stylesListMode.module.css';

const ListMode = ({ img }) => (
  <div className={card}>
    <img src={img} alt="" />
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
      <div className={statUpload}>
        <p>Image upload</p>
        <p> 11-04-2016</p>
      </div>
    </div>
  </div>
);

ListMode.propTypes = {
  img: PropTypes.string.isRequired,
};

export default ListMode;
