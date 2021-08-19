import React from 'react';
import { Layout, Menu } from 'antd';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Start from './companents/Start/Start'
import Introduction from './companents/Introduction/Introduction'
import Components from './companents/Components/Components'
import Props from './companents/Props/Props'
import ReactCreate from './companents/ReactCreate/ReactCreate'
import VirtualDOM from './companents/VirtualDOM/VirtualDOM';
import Axios from './companents/Axios/Axios'
import Refs from './companents/Refs/Refs'
import Key from './companents/Key/Key'
import Events from './companents/Events/Events'
import LifeCycle from './companents/LifeCycle/LifeCycle'
import StateCom from './companents/State/State'
import ReactFragment from './companents/ReactFragment/ReactFragment'
import ReactMemo from './companents/ReactMemo/ReactMemo'
import useEffect from './companents/useEffect/useEffect'
import Router from './companents/Router/Router'
import Context from './companents/Context/Context'
import Forms from './companents/Form/Form'

const { Header, Content, Footer } = Layout;
const list = ['Start','Props',
              'Axios','Refs','Key','Events',
              'LifeCycle','State','ReactFragment',
              'ReactMemo','useEffect','Router',
              'Context', 'Form','VirtualDOM',
              'Introduction','ReactCreate','Components'];
const listComponents = [Start,Props,
              Axios,Refs,Key,Events,
              LifeCycle,StateCom,ReactFragment,
              ReactMemo,useEffect,Router,
              Context, Forms,VirtualDOM,
              Introduction,ReactCreate,Components];

const App = () => (
  <BrowserRouter>
  <Layout className="layout">
  <Header>
      <div className="logo" />
       <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}> 
        {list.map((_, index) => {
          return <Menu.Item key={index}>
            <NavLink to={`/${_}`} >{_}</NavLink>
            </Menu.Item>;
        })}
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content">
        {
          list.map((el,i)=>{
            return <Route key={i} path={`/${el}`} component={listComponents[i]}/>
          })
        }
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  </BrowserRouter>
 
);

export default App;