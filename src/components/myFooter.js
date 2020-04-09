import React from 'react';
import { Layout } from 'antd';
import Logo from '../res/logo.png';

const { Footer } = Layout;

const MyFooter = () => {
    return (
        <Footer style={{
            textAlign: 'center', width: '100%'
        }}>
           
            <div> E-mail:
            <a target="_blank" rel="noopener noreferrer" href="mailto:facit@facit.ba"> facit@facit.ba </a> |
            Telefon: +387 (0)33 229 335 |
            Fax: +387 (0)33 229 337 |
            Dr. Kasima Begića 23, 71 000 Sarajevo, Bosna i Hercegovina
            </div>

            <div style = {{marginTop: '15px'}}>
                <img src={Logo} alt="Logo" style={{ width: '10%' }} />
            </div>

        </Footer>
    )
}

export default MyFooter