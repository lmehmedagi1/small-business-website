import React from 'react';
import './App.css';
import { Layout} from 'antd';
import { BrowserRouter, Route, Switch} from "react-router-dom";

//components
import Home from './components/home';
import MyHeader from './components/myHeader';
import MyFooter from './components/myFooter';
import About from './components/about';
import References from './components/references';
import Products from './components/products';
import Help from './components/help';
import NotFound from './components/notFound';

const {Content} = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout className="layout">
                
      <MyHeader/>

        <Content style={{ padding: '0 50px',  margin: '16px 0' }}>

  {/* <div className="site-layout-content">Content</div> */}
          <Content id="bodyMain">

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
      </Layout>
      <MyFooter/>

    </BrowserRouter>
    
    
  );
}

export default App;
