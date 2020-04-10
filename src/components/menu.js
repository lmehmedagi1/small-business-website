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
                    <img src={Logo} alt="Logo" />
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
                        key="sub1"
                        title={
                            <span>
                                <span> Proizvodi </span>
                                <CaretDownOutlined />
                            </span>
                        }
                    >
                        <Menu.Item id="submenuItem" key="11"> <ApartmentOutlined /> Multifunkcionalni sistemi</Menu.Item>
                        <Menu.Item id="submenuItem" key="12"> <PrinterOutlined /> Printeri</Menu.Item>
                        <Menu.Item id="submenuItem" key="13"> <ScanOutlined /> Skeneri</Menu.Item>
                    </SubMenu>

                    <Menu.Item id="menuItem" key="2">
                        <Link to="/support">
                            Podrška
                </Link>
                    </Menu.Item>

                    <SubMenu
                        key="sub2"
                        title={

                            <span>
                                <span> O nama </span>
                                <CaretDownOutlined />
                            </span>
                        }
                    >
                        <Menu.Item id="submenuItem" key="15"> <HomeOutlined /> Profil
                    <Link to="/about"> </Link></Menu.Item>
                        <Menu.Item id="submenuItem" key="16"> <TeamOutlined /> Partneri</Menu.Item>
                        <Menu.Item id="submenuItem" key="17"> <StarOutlined /> Karijera</Menu.Item>
                        <Menu.Item id="submenuItem" key="18"> <WechatFilled /> Novosti</Menu.Item>
                        <Menu.Item id="submenuItem" key="29"> <MailOutlined /> Kontakt</Menu.Item>
                    </SubMenu>

                    <Menu.Item id="menuItem" key="5">
                        <Link to="/references">
                            Reference
                </Link>
                    </Menu.Item>

                    <Menu.Item id="menuItem" key="6">
                        <Link to="/help">
                            Pomoć
                </Link>
                    </Menu.Item>

                </Menu>




            </div>
        );
    }
} export default MyMenu;