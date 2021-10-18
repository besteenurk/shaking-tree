import React from 'react'
import { ReactSVG } from 'react-svg';
import apple from '../../assets/apple.svg';
import PropTypes from "prop-types";

function Apple(props) {
    return <ReactSVG id='apple' src={apple} className={`apple__${props.className}`} />;
}

Apple.propTypes = {
    className: PropTypes.string,
}

export default Apple;