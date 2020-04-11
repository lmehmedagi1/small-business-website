import React from 'react';
import { Layout } from 'antd';
import Logo from '../res/logo.png';
import {
    InstagramOutlined,
    FacebookOutlined,
} from '@ant-design/icons'

const { Footer } = Layout;

const MyFooter = () => {
    return (
        <div style={{
            margin: '0 auto'
        }}>
        <Footer style={{
            textAlign: 'center'
        }}>
           
            <div> 
                E-mail:
            <a target="_blank" rel="noopener noreferrer" href="mailto:facit@facit.ba"> facit@facit.ba </a> |
            Telefon: +387 (0)33 229 335 |
            Fax: +387 (0)33 229 337 |
            Dr. Kasima Begića 23, 71 000 Sarajevo, Bosna i Hercegovina
            </div>


            <div style = {{marginTop: '10px', width: '100%'}}>

                <a style={{fontSize:'20pt', marginLeft:'2%'}} target="_blank" href='https://www.facebook.com/facitsolutions/' >
                    <FacebookOutlined />
                </a>
                    <span></span>
                <a style={{fontSize:'20pt', marginLeft:'2%'}} target="_blank" href='https://www.instagram.com/facitsarajevo/' >
                    <InstagramOutlined />
                </a>
            </div>


        </Footer>
        </div>
    )
}

export default MyFooter