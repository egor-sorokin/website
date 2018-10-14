import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Button from './Button';


const Item = props => {
  const classes = classNames(
    props.className
  );

  const propsClone = Object.create(props || {});
  delete propsClone.children;

  const renderButton = () => {
    return (
      <Button index={props.index} onClick={props.onClick}>
        {props.buttonLabel}
      </Button>
    );
  };

  return (
    <div
      {...propsClone}
      className={classes}
    >
      {props.children}
      {props.hideButton ? null : renderButton()}
    </div>
  );
};

Item.defaultProps = {
  buttonLabel: 'Explore',
  hideButton: false,
  children: [],
  index: 0,
  className: '',
  onClick: () => {}
};

Item.propTypes = {
  buttonLabel: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.shape({})
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  hideButton: PropTypes.bool,
  index: PropTypes.number,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Item;
