import axios from 'axios'
import * as actionTypes from './actionTypes'

const changeLogin = () => ({
    type: actionTypes.CHANGE_LOGIN,
    value: true
})


export const logout = () => ({
    type:actionTypes.LOGOUT,
    value:false
})


export const login = (username, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?username=' + username + '&password= ' + password)
            .then((response) => {
                const result = response.data.data
                if(result){
                    dispatch(changeLogin())
                }else {
                    alert('failed')
                }
            })
    }
}