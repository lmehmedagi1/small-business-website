import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const MyFooter = () => {
    return (
        <Footer style={{
            textAlign: 'center', position: 'absolute',
            bottom: '0', width: '100%'
        }}> Ovo je footer </Footer>
    )
}

export default MyFooter