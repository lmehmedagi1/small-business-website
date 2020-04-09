import React, { Component } from 'react';
import MyMenu from './menu'
import { Drawer, Button } from 'antd';
import MyMenuVertical from './myMenuVertical';

import {
    MenuOutlined
} from '@ant-design/icons'

class Navbar extends Component {
    state = {
        current: 'mail',
        visible: false
    }
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    }; onClose = () => {
        this.setState({
            visible: false,
        });
    }; render() {

        return (
            <div  >
                <MyMenu />
                <Button className="barsMenu" type="primary" onClick={this.showDrawer}
                    style={{ float: "left", width: '80px', height: '60px' }} >
                    <MenuOutlined />
                </Button>

                <Drawer 
                    theme = "dark"
                    placement="left"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                                
                >
                    <MyMenuVertical />

                </Drawer>
            </div>
        );
    }
} export default Navbar;