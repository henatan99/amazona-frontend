import React from 'react';
import PropTypes from 'prop-types';

const MessageBox = (props) => {
  const { variant, children } = props;

  return (
    <div className={`alert alert-${variant || 'info'}`}>
      {children}
    </div>
  );
};

MessageBox.defaultProps = {
  variant: '',
  children: null,
};

MessageBox.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.any,
};

export default MessageBox;
