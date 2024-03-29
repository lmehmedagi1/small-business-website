import React from 'react';
import './App.css';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Headroom from 'react-headroom';

//components
import Home from './components/home';
import MyHeader from './components/myHeader';
import MyFooter from './components/myFooter';
import About from './components/about';
import References from './components/references';
import Products from './components/products';
import Help from './components/help';
import NotFound from './components/notFound';
import Partners from './components/partners';
import Support from './components/support';


const { Content } = Layout;

function App() {
  return (

    <BrowserRouter>
      <Layout className="layout">
      <Headroom>
      <MyHeader />
      </Headroom>
        

        <Content style={{}}>

          {/* <div className="site-layout-content">Content</div> */}
          <Content id="bodyMain" style = {{width: '100%'}}>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/help" component={Help} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/references" component={References} />
              <Route exact path="/partners" component={Partners} />
              <Route exact path="/support" component={Support} />
              <Route path="*" component={NotFound} />
            </Switch>

          </Content>
        </Content>

        <MyFooter />

      </Layout>
    </BrowserRouter>


  );
}

export default App;
