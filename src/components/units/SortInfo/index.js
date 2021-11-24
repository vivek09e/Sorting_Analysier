import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const SortInfo = ({
  title,
  description,
  worstCase,
  avgCase,
  bestCase,
  space
}) => {
  return (
    <div className="SortInfo">
      <hr />
      <h1>{title ? title : 'Select Algorithm'}</h1>

      <div className="SortInfo__Body">
        <article className="SortInfo__Article">
          {description ? (
            description
          ) : (
            <p>
              Choose a sorting algorithm from the dropdown to visualise the execution process on an array of numbers.
            </p>
          )}
        </article>

        <aside className="SortInfo__Aside">
          <h3>Run-time Complexity</h3>
          <text>Worst-case time complexity</text><b>&nbsp;{worstCase}</b>
          <br/>
          <text>Average time complexity</text><b>&nbsp;{avgCase}</b>
          <br/>
          <text>Best-case time complexity</text><b>&nbsp;{bestCase}</b>
          <br/>
          <text>Worst-case space complexity</text><b>&nbsp;{space}</b>
        </aside>
      </div>
    </div>
  );
};

SortInfo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.object,
  worstCase: PropTypes.object,
  avgCase: PropTypes.object,
  bestCase: PropTypes.object,
  space: PropTypes.object
};

export default SortInfo;
