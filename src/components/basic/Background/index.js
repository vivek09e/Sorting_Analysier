import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function buildClassNames(rootClass, ClassMappings, userClassName) {
  let classNames = `${rootClass}`;
  Object.keys(ClassMappings).forEach((className) => {
    if (ClassMappings[className]) {
      classNames += ` ${className}`;
    }
  });
  classNames += ` ${userClassName}`;
  return classNames;
}

const Background = ({ show, opaque, dark, className, onClick }) => {
  const classNames = buildClassNames(
    'Background',
    {
      'Background_opaque': opaque,
      'Background_dark': dark,
      'Background_clickable': onClick !== undefined
    },
    className
  );

  return show ? <div className={classNames} onClick={onClick} /> : null;
};

Background.propTypes = {
  show: PropTypes.bool,
  opaque: PropTypes.bool,
  dark: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
};
export default Background;
