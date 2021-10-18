import React from 'react'
import { ReactSVG } from 'react-svg'
import tree from '../../assets/tree1.svg'
import Apple from './Apple'
import PropTypes from "prop-types";

function Tree(props) {
    console.log(props);
    return (
        <div className='tree' >
            <div className={props.className}>
                <ReactSVG src={tree} />   
                {props.apples ? props.apples.map(apple => {
                    return <Apple key={apple.key} className={apple.className} />;
                }) : ""}
                {/* <img src={tree} className="tree" alt='' />           */}
            </div>
            {/* Check apples stay the props, if there are, call them with .map(). These classname is setting with props */}
            
        </div>
    )
}

Tree.propTypes = {
    className: PropTypes.string,
    apples: PropTypes.array
};

export default Tree;
