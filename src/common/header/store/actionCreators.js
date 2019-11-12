import * as actionTypes from './actionTypes'
import axios from 'axios';
import { fromJS } from 'immutable'

const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 3)
})

export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
})

export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
})

export const changePageList = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page:page
})

export const getList = () => {
    return (dispatch) => {
        axios.get('api/headerList.json')
            .then((response)=>{ 
                const data = response.data
                dispatch(changeList(data.data))
            })
            .catch((error)=>{
                console.log(error)
            })
    }
}