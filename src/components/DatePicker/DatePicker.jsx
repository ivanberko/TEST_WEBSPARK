import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const inputDatePicker = ({ Date, setDate }) => {
  return (
    <DatePicker
      selected={Date}
      onChange={(date) => setDate(date)}
      isClearable
    />
  );
};

inputDatePicker.defaultProps = {
  Date: null,
};

inputDatePicker.propTypes = {
  Date: PropTypes.number,
  setDate: PropTypes.func.isRequired,
};

export default inputDatePicker;
