import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { actionCreators }   from './store';
import { actionCreators as loginCreators } from '../../pages/login/store/'
import { 
    HeaderWrapper, Logo, Nav, 
    NavItem, NavSearch, Addition, 
    Button, SearchWrapper, SearchInfo,
    SearchInfoTitle, SearchInfoSwitch, SearchInfoItem,
    SearchInfoList } from './style';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom'

class Header extends Component {
    showListArea = () => {
        const { focused, list, page,totalPage, mouseIn, mouseEnterHandler, mouseLeaveHandler, pageChangeHanlder } = this.props;
        const newList = list.toJS();
        const pageList = [];

        if(newList.length){
            for(let i = (page-1)*3; i < page * 3; i++){
                pageList.push(
                    <SearchInfoItem key = {newList[i]} >{newList[i]}</SearchInfoItem>
                )
            }            
        }



        if(focused||mouseIn){
            return (
                <SearchInfo 
                    onMouseEnter ={mouseEnterHandler}
                    onMouseLeave ={mouseLeaveHandler}
                    >
                <SearchInfoTitle>
                    What's hot
                    <SearchInfoSwitch onClick={()=>pageChangeHanlder(page, totalPage, this.spinIcon)}>
                        <span ref={(icon)=>{this.spinIcon = icon}} className='iconfont spin'>
                            &#xe606;
                        </span>   
                        Change
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {pageList}
                </SearchInfoList>
            </SearchInfo>
            )
        } else {
            return null
        }
    }
    render(){
        const { focused, focusHandler, blurHandler, list, login, logout } = this.props;
        return (   
            <HeaderWrapper>
               
              <Nav>
              <Link to='/'>
              <Logo />
          </Link>
                <NavItem className="left active"><Link className="A-logo" to='/'>ANIME-ZONE</Link></NavItem>
                    <NavItem className="right">
                    <Link to='/write'>
                        <Button className="post"><span className="iconfont">&#xe824;</span>Post</Button>
                    </Link>
                    </NavItem>
                  {
                      login ? 
                       <NavItem className="right" onClick={logout}><Button className="post">Log out</Button></NavItem> :
                       <Link to='/login'><NavItem className="right"><Button>Join us</Button></NavItem></Link>
                  }
                 
                  <SearchWrapper>
                      <CSSTransition 
                          in={focused}
                          timeout={200}
                          classNames="slide">
                          <NavSearch 
                              className={focused ? 'focused' : ''}
                              onFocus = {()=>focusHandler(list)}
                              onBlur = {blurHandler}>
                          </NavSearch>               
                      </CSSTransition>
      
                      <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
                          &#xe63d;
                      </span>    
                      {this.showListArea()}
                  </SearchWrapper>
              </Nav>
          </HeaderWrapper>      
          )
    }
}




const mapStateToProops = (state) => {
    return {
        // two method to fetch data, same effect
        focused: state.get('header').get('isFocused'),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login'])
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        //Two method
       focusHandler(list){
           if(list.size === 0){
               dispatch(actionCreators.getList())
           }
           dispatch(actionCreators.searchFocus());
           
       },
        blurHandler: () => dispatch(actionCreators.searchBlur()),
        mouseEnterHandler: () => dispatch(actionCreators.mouseEnter()),
        mouseLeaveHandler: () => dispatch(actionCreators.mouseLeave()),
        pageChangeHanlder: (page, totalPage, spin) => {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
            if(originAngle){
                originAngle = parseInt(originAngle, 10)
            }else{
                originAngle = 0
            }

            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'


            if(page < totalPage){
                dispatch(actionCreators.changePageList(page+1))
            }else {
                dispatch(actionCreators.changePageList(1))
            }
        },
        logout: () => dispatch(loginCreators.logout())
    }
}


export default connect(mapStateToProops, mapDispatchToProps)(Header);
