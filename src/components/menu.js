import React, { Component } from 'react';
import { Menu, Button } from 'antd';
import { Link } from "react-router-dom";
import Logo from '../res/logo.png';


import {
    CaretDownOutlined,
    MailOutlined,
    PrinterOutlined,
    ScanOutlined,
    ApartmentOutlined,
    LaptopOutlined,
    SwitcherOutlined,
    EnvironmentOutlined
} from '@ant-design/icons'




const { SubMenu } = Menu;

class MyMenu extends Component {

    

    state = {
        currentLocation: ''
    }

    clickedMenu = () => {
        let href = window.location.href.split('/');
        href = href[href.length - 1];
        this.setState({ currentLocation: href });
    }

    componentWillMount() {
        let href = window.location.href.split('/');
        href = href[href.length - 1];
        this.setState({ currentLocation: href });
    }


    render() {

        return (
            <div id="menuContainer">

                <div style={{ float: 'left', width: '10%', textAlign: 'left' }}>
                    <a href="/">
                        <img src={Logo} alt="Logo" />
                    </a>
                </div>

                <div style={{ float: 'right', width: '15%', fontSize: '20pt' }}>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:facit@facit.ba">
                        <MailOutlined />
                    </a>
                    <span style={{ width: '3px' }}> </span>
                    <a style={{ marginLeft: '10%' }} target="_blank" href="https://www.google.com/maps/place/Facit+d.o.o./@43.8408702,18.3325361,17z/data=!4m5!3m4!1s0x4758c929efc7f57d:0xe752e9e3a5f54102!8m2!3d43.8408818!4d18.3315383">
                        <EnvironmentOutlined />

                    </a>


                    


                </div>




                <Menu mid="menu" theme="dark" mode="horizontal" defaultSelectedKeys={['/' + this.state.currentLocation]} selectedKeys={['/' + this.state.currentLocation]} onClick={() => { this.clickedMenu(); }}>

                    <Menu.Item id="menuItem" key='/'>
                        <Link to="/">
                            Naslovna
                        </Link>
                    </Menu.Item>

                    <SubMenu
                        key='/products'
                        title={
                            <span>
                                <span> Proizvodi </span>
                                <CaretDownOutlined />
                            </span>
                        }
                    >
                        <Menu.Item id="submenuItem" key="ovdje kad se path promijeni"> <PrinterOutlined /> Štampači </Menu.Item>
                        <Menu.Item id="submenuItem" key="22"> <ApartmentOutlined /> Multifunkcionalni uređaji </Menu.Item>
                        <Menu.Item id="submenuItem" key="23"> <SwitcherOutlined /> Produkcijski uređaji </Menu.Item>
                        <Menu.Item id="submenuItem" key="24"> <LaptopOutlined /> IT oprema </Menu.Item>
                        <Menu.Item id="submenuItem" key="25"> <ScanOutlined /> Potrošni materijal </Menu.Item>
                    </SubMenu>

                    <Menu.Item id="menuItem" key='/support'>
                        <Link to="/support">
                            {console.log(window.location.href)}
                            Podrška
                        </Link>
                    </Menu.Item>


                    <Menu.Item id="menuItem" key='/partners'>
                        <Link to="/partners">
                            Partneri
                        </Link>
                    </Menu.Item>

                    <Menu.Item id="menuItem" key='/references'>
                        <Link to="/references">
                            Reference
                        </Link>
                    </Menu.Item>


                    <Menu.Item id="menuItem" key='/about'>
                        <Link to="/about">
                            O nama
                        </Link>
                    </Menu.Item>

                </Menu>




            </div>
        );
    }
} export default MyMenu;