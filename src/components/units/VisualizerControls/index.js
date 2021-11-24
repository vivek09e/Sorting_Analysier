import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

import Button from '../../basic/Button';
import { MdPlayArrow as Play, MdPause as Pause } from 'react-icons/md';

// Helper function
function isDisabled(action, disabled = false) {
  return action === undefined || disabled;
}

const VisualizerControls = ({
  // Actions
  onPlay,
  onPause,
  // States
  playing,
  playDisabled,
  pauseDisabled
}) => {
  return (
    <div className="VisualizerControls">
      {/* Play or Pause button - context dependent */}
      <Button
        icon={playing ? Pause : Play}
        onClick={playing ? onPause : onPlay}
        disabled={
          playing
            ? isDisabled(onPause, pauseDisabled)
            : isDisabled(onPlay, playDisabled)
        }
        raised
        iconClass="VisualizerControls__Icon"
        className="VisualizerControls__CenterButton"
      />
    </div>
  );
};

VisualizerControls.propTypes = {
  onPlay: PropTypes.func,
  onPause: PropTypes.func,

  playing: PropTypes.bool,
  playDisabled: PropTypes.bool,
  pauseDisabled: PropTypes.bool
};

export default VisualizerControls;
