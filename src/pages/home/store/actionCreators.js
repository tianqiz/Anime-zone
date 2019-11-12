import axios from 'axios';
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'


const changeHomeData = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    relatedArticles: result.relatedArticles
})

const addHomeList = (result, nextPage) => ({
     type: actionTypes.ADD_HOME_LIST,
     list: fromJS(result),
     nextPage
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json')
            .then((response) => {
                const result = response.data.data;
                dispatch(changeHomeData(result))
            })
    }
}

export const getMoreList = (page) => {
    return (dispatch) =>{
        axios.get('/api/homeList.json?page=' + page)
        .then((response) => {
            const result = response.data.data;
            dispatch(addHomeList(result, page+1))
        })
    }
}

export const toggleTopShow = (show) => {
    return {
        type: actionTypes.TOGGLE_SHOW,
        show
    }
}