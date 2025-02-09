import React, { Component } from 'react'
import { DetailWrapper, Header, Content } from './store/style'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from './store'
class Detail extends Component {
    render(){
        return (
            <DetailWrapper>
                <Header>
                    {this.props.title}
                </Header>
                <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
            </DetailWrapper>
            
        )
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content'])
    }
}

const mapDispatchToPorps = (dispatch) => {
    return {
        getDetail: (id) => dispatch(actionCreators.getDetail(id))
    }
}
export default connect(mapStateToProps,mapDispatchToPorps)(withRouter(Detail));