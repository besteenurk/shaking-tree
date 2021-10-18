import React, { Component } from 'react'
import Tree from './childs/Tree'
import Button from './childs/Button'
import Basket from './childs/Basket'
import Apple from './childs/Apple'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as shakingReducer from '../redux/reducers/shakingReducer'
import PropTypes from "prop-types";

class HomeComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      test: false,
    }
  }
  render() {
    const { apples, actions } = this.props;

    if (apples.dropApples && this.state.test === false) {
      setTimeout(() => { this.setState({ test: true }); }, 5000);
    }
    if (this.state.test === true) {
      clearTimeout();
    }

    return (
      <div className='main'>
        <Tree className={apples.treeClass} apples={apples.apples} />
        <div className="contianer_basket">
          <div>
            {this.state.test === true ? apples.dropApples ? <div>
              <Apple className={apples.dropApples}></Apple>
            </div> : "" : ""}
            {this.state.test === true ? apples.dropApples ? <div>
              <Apple className={`apple_${apples.dropApples}`}></Apple>
            </div> : "" : ""}
          </div>
          <Basket />
        </div>
        <Button onClick={apples => actions.startAnimation("tree-shake", "basket_to", apples)} />
      </div>
    )
  }
}

HomeComponent.propTypes = {
  apples: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function StateToProps(state) {
  return {
    apples: state.shakingReducer
  };
}

function DispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(shakingReducer.actions, dispatch)
  };
}

export default connect(
  StateToProps,
  DispatchToProps
)(HomeComponent);
