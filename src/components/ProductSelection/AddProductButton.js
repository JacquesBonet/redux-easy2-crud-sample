import React, {PropTypes} from "react";

const AddProductButton = ({onClick, title}) => (
  <button onClick={(e) => {
    e.preventDefault();
    onClick();
  }}>
    {title}
  </button>
);

AddProductButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default AddProductButton;
