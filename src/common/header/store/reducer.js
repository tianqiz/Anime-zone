import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    isFocused: false,
    mouseIn:false,
    list:[],
    page:1,
    totalPage:1
});

export default (state = defaultState, action) => {

    switch(action.type){
        case actionTypes.SEARCH_FOCUS:
            return state.set('isFocused', true);
        case actionTypes.SEARCH_BLUR:
            return state.set('isFocused', false);
        case actionTypes.CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case actionTypes.MOUSE_LEAVE:
                return state.set('mouseIn', false);
        case actionTypes.CHANGE_PAGE:
                return state.set('page', action.page);
        default:
            return state
    }    
}