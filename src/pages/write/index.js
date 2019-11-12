import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


class Write extends PureComponent {
    render(){
        const login = this.props.loginStatus
        if(login){
            return (
                <div>Post an article</div>
            )
        } else {
            return <Redirect to='/login' />
        }

    }
  
}
const mapStateToProps = (state) => {
    return {
        loginStatus: state.getIn(['login', 'login'])
    }
}



export default connect(mapStateToProps,null)(Write);