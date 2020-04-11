import React, { Component } from 'react';
import { Menu, Button } from 'antd';
import { Link } from "react-router-dom";
import Logo from '../res/logo.png';

import {
    CaretDownOutlined,
    MailOutlined,
    PrinterOutlined,
    ScanOutlined,
    TeamOutlined,
    WechatFilled,
    HomeOutlined,
    StarOutlined,
    ApartmentOutlined
} from '@ant-design/icons'




const { SubMenu } = Menu;

class MyMenu extends Component {
    render() {
        return (
            <div id="menuContainer">

                <div style={{ float: 'left', width: '10%', textAlign: 'left' }}>
                    <a  href="/">
                        <img  src={Logo} alt="Logo"/> 
                    </a>
                </div>

                <div style={{ float: 'right', width: '10%', fontSize: '20pt' }}>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:facit@facit.ba">
                        <MailOutlined />
                    </a>
                </div>




                <Menu mid="menu" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>

                    <Menu.Item id="menuItem" key="1">
                        <Link to="/">
                            Naslovna
                        </Link>
                    </Menu.Item>

                    <SubMenu
                        key="2"
                        title={
                            <span>
                                <span> Proizvodi </span>
                                <CaretDownOutlined />
                            </span>
                        }
                    >
                        <Menu.Item id="submenuItem" key="21"> <ApartmentOutlined /> Multifunkcionalni sistemi</Menu.Item>
                        <Menu.Item id="submenuItem" key="22"> <PrinterOutlined /> Printeri</Menu.Item>
                        <Menu.Item id="submenuItem" key="23"> <ScanOutlined /> Skeneri</Menu.Item>
                    </SubMenu>

                    <Menu.Item id="menuItem" key="3">
                        <Link to="/support">
                            Podrška
                        </Link>
                    </Menu.Item>


                    <Menu.Item id="menuItem" key="4">
                        <Link to="/partners">
                            Partneri
                        </Link>
                    </Menu.Item>

                    <Menu.Item id="menuItem" key="5">
                        <Link to="/references">
                            Reference
                        </Link>
                    </Menu.Item>


                    <Menu.Item id="menuItem" key="6">
                        <Link to="/about">
                            O nama
                        </Link>
                    </Menu.Item>

                    <Menu.Item id="menuItem" key="7">
                        <Link to="/help">
                            Pomoć
                        </Link>
                    </Menu.Item>

                </Menu>




            </div>
        );
    }
} export default MyMenu;