import React, { PureComponent } from 'react';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Article from './component/Article';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
class Home extends PureComponent {
    backToTopHandler  ()  {
        window.scrollTo(0,0)
    }


    render(){
        return (
            <HomeWrapper>
                
                <HomeLeft>
                    <Article />
                    <Recommend />
                </HomeLeft>
                <HomeRight>
                    <img 
                        className="banner-img"
                        src='https://assets.change.org/photos/8/vd/py/lFVdPYCyAItZJKJ-800x450-noPad.jpg?1550258445'
                        alt="Weathering with you"
                    />
                    <Topic />
                    <List />
                </HomeRight>
                {this.props.show ? <BackTop onClick = {this.backToTopHandler}>Top</BackTop> : null}
                
            </HomeWrapper>

        )
    }
    componentDidMount(){       
        this.props.changHomeData()
        this.bindEvents()
    }
    
    componentWillUnmount(){
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
    bindEvents = () => {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapStateToProps = (state) => {
    return {
        show: state.getIn(['home', 'showScroll'])
    }
    
}


const mapDispatchToProps = (dispatch) => {
    return{
        changHomeData: () => dispatch(actionCreators.getHomeInfo())  ,
        changeScrollTopShow: () => {
            if( document.documentElement.scrollTop > 100){
                dispatch(actionCreators.toggleTopShow(true))
            } else {
                dispatch(actionCreators.toggleTopShow(false))
            }
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);