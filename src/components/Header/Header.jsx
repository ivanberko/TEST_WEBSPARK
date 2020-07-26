/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../img/Logo.png';
import { logo, profile, profileTitle, stats } from './stylesHeader.module.css';

const Header = ({ startDate }) => {
  const date = `${new Date(startDate).getDate()}-${
    new Date(startDate).getMonth() + 1
  }-${new Date(startDate).getFullYear()}`;
  return (
    <header>
      <div className={logo}>
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <div className={profile}>
        <div className={profileTitle}>
          <h2>monblanproject</h2>
          <span>Start on {startDate && date}</span>
        </div>
        <div className={stats}>
          <p>
            <span>870</span> posts
          </p>
          <p>
            <span>11,787</span> followers
          </p>
          <p>
            <span>112</span> following
          </p>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  startDate: null,
};

Header.propTypes = {
  startDate: PropTypes.number,
};

export default Header;
