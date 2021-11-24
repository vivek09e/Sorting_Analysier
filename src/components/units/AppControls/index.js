import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Button from '../../basic/Button';
import Switch from '../../basic/Switch';
import Menu from '../../units/Menu';

const AppControls = ({
  algorithm,
  onAlgorithmChange,
  onGenerateArray,
  arraySize,
  onArraySizeChange,
  onToggleDarkMode,
  darkMode
}) => {
  return (
    <Fragment>
      <Menu
        placeholder="Choose Algorithm"
        items={[
          'Bubble Sort',
          'Selection Sort',
          'Insertion Sort',
          'Merge Sort',
          'Quick Sort'
        ]}
        selected={algorithm}
        onSelect={onAlgorithmChange}
      />
      <div className="AppControls__Size">
        <span>Array size</span>
        <Menu
          placeholder="Array Size"
          items={['5', '10', '25', '50', '75', '100']}
          selected={String(arraySize)}
          onSelect={onArraySizeChange}
        />
      </div>
      <Button onClick={onGenerateArray}>Generate Array</Button>
      <Switch 
        label="Dark Mode"
        onSwitch={onToggleDarkMode}
        checked={darkMode}
      />
    </Fragment>
  );
};

AppControls.propTypes = {
  algorithm: PropTypes.string,
  onAlgorithmChange: PropTypes.func.isRequired,
  onGenerateArray: PropTypes.func.isRequired,
  arraySize: PropTypes.number,
  onArraySizeChange: PropTypes.func.isRequired,
  onToggleDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool
};

export default AppControls;
