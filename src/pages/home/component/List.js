import React, { Component } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
class List extends Component {
    render(){
        return (
            <div>
                {this.props.list.map((item,index)=>{
                    return (
                        
                            <ListItem key={index} >
                                <img className = 'list-pic' src={item.get('image')} alt=''/>
                                <ListInfo>
                                    <Link className = "link" to={'/detail/'+ item.get('id')} >
                                        <h3 className='title'>{item.get('title')}</h3>
                                    </Link>
                                    <p className='desc'>{item.get('description')}</p>
                                </ListInfo>
                            </ListItem>                          
                      
                    )
                })}      
                <LoadMore onClick = {()=>this.props.getMoreList(this.props.page)}>Load more</LoadMore>
            </div>

        )
    }
}

const mapStateToProps = (state) =>{
    return    {
        list: state.get('home').get('articleList'),
        page: state.getIn(['home', 'articlePage'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMoreList: (page) => dispatch(actionCreators.getMoreList(page))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(List);