import * as actionTypes from './actionTypes'
import axios from 'axios'


const changeDetail = (title, content) => ({
    type: actionTypes.CHANGE_DETAIL,
    title: title,
    content: content
})


export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json')
            .then((response) => {
                const result = response.data.data.filter((item)=>{
                    return Number(item.id) === Number(id)
                })
               dispatch(changeDetail(result[0].title, result[0].content))
            })
    }
}