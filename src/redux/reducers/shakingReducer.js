import { ActionTypes } from "../constants/action-types";
import Immutable from "immutable";

// const initialState = {
//     shaking: false,
// };  

const initialState = {
  treeClass: "",
  dropApples: "",
  apples: [
    { key: 1, className: "apple__1" },
    { key: 2, className: "apple__2" },
    { key: 3, className: "apple__3" },
    { key: 4, className: "apple__4" },
    { key: 5, className: "apple__5" },
    { key: 6, className: "apple__6" },
    { key: 7, className: "apple__7" },
    { key: 8, className: "apple__8" },
    { key: 9, className: "apple__9" },
  ]
};

export default function shakingReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SHAKE_TREE: {
      return Immutable.fromJS(state)
        .merge({
          treeClass: action.treeClass,
          dropApples: action.dropApples,
          apples: action.apples
        })
        .toJS();
    }

    default:
      return state;
  }
}


export const actions = {
  startAnimation(treeClass, dropApples, apples) {
    return { type: ActionTypes.SHAKE_TREE, treeClass, dropApples, apples};
  }
};
