import React, { Component } from 'react'
import { ArticleWrapper, ArticleItem, ArticleHeader } from '../style'
import { connect } from 'react-redux'
class Article extends Component {
    render(){
        return (
            <ArticleWrapper>
                <ArticleHeader>
                    Related articles
                    <hr />
                </ArticleHeader>
                { this.props.alist.map((item) => {
                    return (
                        <ArticleItem key={item.get('id')}>
                            {item.get('content')}
                        </ArticleItem>
                    )
                
                    
                })}
            </ArticleWrapper>
            
        )
    }
}
const mapStateToProps = (state) => {
    return {
        alist : state.getIn(['home', 'relatedArticles'])
    }
}
export default connect(mapStateToProps,null)(Article);