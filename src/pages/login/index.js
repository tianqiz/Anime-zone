import React, { PureComponent } from 'react'
import { LoginWrapper, LoginBox, Input,Button } from './style'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Link } from 'react-router-dom'
class Login extends PureComponent {
    render(){
        const login = this.props.loginStatus
        if(!login){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="username" innerRef={(input)=> {this.username = input}}/>
                        <Input placeholder="password" type="password" innerRef={(input)=> {this.password = input}}/>
                        <Button onClick = {()=>this.props.login(this.username, this.password)}>Log in</Button>
                        <Button>Sign up</Button>
                        <Link to='#'>Forget password?</Link>
                    </LoginBox>
                
                </LoginWrapper> 
            )
        } else {
            return <Redirect to='/' />
        }

    }
  
}
const mapStateToProps = (state) => {
    return {
        loginStatus: state.getIn(['login', 'login'])
    }
}


const mapDispatchToPorps = (dispatch) => {
    return {
        login: (username, password) => {
            dispatch(actionCreators.login(username.value, password.value))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToPorps)(Login);