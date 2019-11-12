import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    height: 300px;
`;

export const HomeRight = styled.div`
    float: right;
    width: 625px;
    padding-top: 30px;
    height: 300px;
    .banner-img{
        width:625px;
        
    }
`;

export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    width: 280px;
`;

export const TopicWrapper = styled.div`
    overflow:hidden;
    padding: 20p 0 10px 0;
    margin-left: -18px;
`

export const TopicItem = styled.div`
    float: left;
    height:32px;
    line-height:32px;
    background: #a5a5a5;
    margin-left: 18px;
    margin-top: 10px;
    padding: 0 10px;
    border-radius: 15px;
    font-size: 14px;
    color: #fff;
`

export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .list-pic{
        display: block;
        width: 125px;
        height: 100px;
        float: left;
        border-radius: 10px;
        margin-right: 10px
    }
`
export const ListInfo = styled.div`
    width: 625px;
    float; right;
    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333
    }
    .desc{
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
    .link{
        text-decoration: none;
    }
`

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
    border: 1px solid black;
    height: 300px;
    text-align: center
`
export const RecommendItem = styled.div`
    height: 50px;
    width: 280px;
    background-image: url(${(props)=> props.imgURL});
    background-size: contain
`

export const ArticleWrapper = styled.div`
    margin-top: 25px;
    height: 50px;
    width: 278px;
    border-radius: 3px;
    height: 150px;
    line-height: 20px;
   
`
export const ArticleHeader = styled.div`
font-size: 15px;
`

export const ArticleItem = styled.div`
    font-size: 14px;
    color: #2b6dad;
    margin-bottom:3px;
`

export const LoadMore = styled.div`
    width: 20%;
    height: 40px;
    line-height: 40px;
    margin: 30px auto;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer
`
export const BackTop = styled.div`
    position: fixed;
    right: 30px;
    bottom: 30px;
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid  #ccc;
`