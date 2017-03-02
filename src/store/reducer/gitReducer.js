import {GitAction} from '../action/gitAction'


const INITIAL_STATE = {
    gitData:{},
    loading: true
};

export function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GitAction.GetData:
    return Object.assign({}, state, { loading: true });
  case GitAction.Success:
    return Object.assign({}, state, { loading: false, gitData:action.payload});
  case GitAction.Failure:
    return Object.assign({}, state,{ loading: true })
  default:
    return state
  }
}