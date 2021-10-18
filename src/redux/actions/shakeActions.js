import {ActionTypes} from '../constants/action-types'

export const shakeTree = (shaking) => {
    return {
        type: ActionTypes.SHAKE_TREE,
        payload: shaking
    }
}