import React from 'react';
import { Layout } from 'antd';
import MyMenu from './menu';


const { Header } = Layout;

const MyHeader = () => {
    return (
        <Header id="header" style={{ verticalAlign: 'middle'}} >

            <MyMenu />  

        </Header>
    )
}

export default MyHeader