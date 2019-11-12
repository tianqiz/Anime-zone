import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
    topicList : [],
    articleList: [],
    recommendList: [],
    relatedArticles: [],
    articlePage: 1,
    showScroll: false
});


const changeHomeData = (state, action) =>{
    return state.merge({
                'topicList':fromJS(action.topicList),
                'articleList':fromJS(action.articleList),
                'recommendList': fromJS(action.recommendList),
                'relatedArticles': fromJS(action.relatedArticles)
            })
}

export default (state = defaultState, action) => {

    switch(action.type){
        case actionTypes.CHANGE_HOME_DATA:
            return changeHomeData(state, action)
        case actionTypes.ADD_HOME_LIST:
            return state.merge({
                'articleList': state.get('articleList').concat(action.list),
                'articlePage': action.nextPage
        })  
        case actionTypes.TOGGLE_SHOW:
            return state.set('showScroll', action.show)
        default:
            return state
    }    
}