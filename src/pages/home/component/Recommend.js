import React, { Component } from 'react'
import { RecommendWrapper, RecommendItem} from '../style'
import { connect } from 'react-redux'
class Recommend extends Component {
    render(){
        return (
            <RecommendWrapper>
                {this.props.list.map((item)=>{
                    return (
                        <RecommendItem key={item.get('id')} imgURL={item.get('imgURL')}>{'AD' + item.get('id')}</RecommendItem>
                    )
                })}
                
            </RecommendWrapper>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home', 'recommendList'])
    }
}

export default connect(mapStateToProps, null)(Recommend);