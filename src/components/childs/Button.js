import React from 'react'
import PropTypes from "prop-types";

function ButtonShake(props) {

  // when click the button, create classnames for dropping apples
  const handleOnClick = () => {
    let apples = [
      { key: 1, className: "apple__1 drop_apple__1" },
      { key: 2, className: "apple__2 drop_apple__2" },
      { key: 3, className: "apple__3 drop_apple__3" },
      { key: 4, className: "apple__4 drop_apple__4" },
      { key: 5, className: "apple__5" },
      { key: 6, className: "apple__5" },
      { key: 7, className: "apple__5" },
      { key: 8, className: "apple__5" },
      { key: 9, className: "apple__5" },
    ];
    // need to send these objects to state
    props.onClick(apples);
  }

  return (
    <button className="button" onClick={handleOnClick} >
      SHAKE TREE
    </button>
  );
}

ButtonShake.propTypes = {
  onClick: PropTypes.func
};

export default ButtonShake;