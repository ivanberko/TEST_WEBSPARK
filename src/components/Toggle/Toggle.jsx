import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyle = makeStyles({
  active: {
    color: '#3b8ede',
  },
});

const StyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    marginBottom: theme.spacing(3),
    border: 'none',
    '&:not(:first-child)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-child': {
      borderRadius: theme.shape.borderRadius,
    },
  },
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}))(ToggleButtonGroup);

const Toggle = ({ handleChange, view }) => {
  const classes = useStyle();
  return (
    <StyledToggleButtonGroup
      orientation="horizontal"
      value={view}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="list" aria-label="list">
        <ViewListIcon className={view === 'list' && classes.active} />
      </ToggleButton>
      <ToggleButton value="grid" aria-label="module">
        <ViewModuleIcon className={view === 'grid' && classes.active} />
      </ToggleButton>
    </StyledToggleButtonGroup>
  );
};

Toggle.propTypes = {
  view: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Toggle;
