import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

//components
import Home from './components/home';
import About from './components/about';
import References from './components/references';
import Products from './components/products';
import Help from './components/help';
import NotFound from './components/notFound';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
    <Layout className="layout">
    <Header id="header">
      <div className="logo" />
      <Menu id="menu" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
          <Link to="/">
            Naslovna
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/products">
            Proizvodi
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/support">
            Podrška
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/about">
            O nama
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/references">
            Reference
          </Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to="/help">
            Pomoć
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Content</div>
      <Content id = "bodyMain">

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/help" component={Help} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/references" component={References} />
              <Route path="*" component={NotFound} />
            </Switch>

    </Content>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  </BrowserRouter>
  );
}

export default App;
