import styled from 'styled-components'
import logoPic from '../../statics/Anime-logo.png'


export const HeaderWrapper = styled.div`
    z-index: 1;
    position: relative;
    height:56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
    position: absolute;
    top:0;
    left:0px;
    display:blcok;
    width:200px;
    height:56px;
    background:url(${logoPic});
    background-size:contain;
    background-repeat: no-repeat;

`;

export const Nav = styled.div`
    
    width:960px;
    height:100%;
    margin:0 auto;
    box-sizing:border-box;
    
`

export const NavItem = styled.div`
    font-family: 'Lato', sans-serif;
    line-height:56px;
    padding:0 15px;
    font-size:20px;
    color:#333;
    &.left {
        float:left
    }
    &.right {
        float:right;
    }
    &.active{
        color:black;
        text-docoration: none;
    }
    .A-logo{
        text-decoration: none;
        color:black
        @media screen and (max-width: 1150px) {
            display:none
        }
    }
`

export const NavSearch = styled.input.attrs(
    {placeholder: "Search"}
)`
    width:170px;
    height:38px;
    padding: 0 20px
    margin-top: 9px;
    margin-right: 20px;
    border-sizing: border-box;
    border: none;
    outline:none;
    background: #eee;
    color:#777;
    &.focused{
        width: 200px;
    }
    &.slide-enter{
        transition: all .2s ease-out;
    }
    &.slide-enter-active{
        width:200px;
    }
    &.slide-exit{
        transition: all .2s ease-out;
    }
    &.slide-exit-active{
        width:170px;
    }
`;

export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height: 56px;
`;
export const Button = styled.div`
    font-size:14px;
    padding: 0 20px
    margin-top: 9px;
    margin-right: -10px;
    line-height:38px;
    border-radius:20px
    border: 1px solid black;
    float:right;
    boder-sizing:border-box
    &.post{
        background:black;
        color:white;
    }
    .iconfont{
        padding-right:5px
    }
`
export const SearchWrapper = styled.div`
    position:relative;
    float:right;

    .zoom{
        position:absolute;
        right:25px;
        bottom:3px;
        border-radius: 15px;
        width:30px;
        line-height:30px;
        text-align:center;
        &.focused{
            background: #777;
            color:white;
        }
    }
`

export const SearchInfo = styled.div`
    position:absolute;
    left:0;
    top:56px;
    width: 200px;
    padding:0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background: #fff;
`
export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size:14px;
    color: #969696;

`
export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin{
        display:bloack;
        float: left;
        font-size:12px;
        margin-right:3px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }

`
export const SearchInfoItem = styled.a`
    display:block;
    font-size: 12px;
    line-height:20px;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: black;
    border-radius: 3px;
    float: left;
    margin: 0px 10px 10px 0px;
`

export const SearchInfoList = styled.div`
    overflow:hidden
`
