import React from 'react';
import { Layout } from 'antd';
import Navbar from './navbar'

const { Header } = Layout;

const MyHeader = () => {
    return (
        <Header id="header" style={{ verticalAlign: 'middle'}} >

            <Navbar/>

        </Header>
    )
}

export default MyHeader