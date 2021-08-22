import React from 'react';
import { Layout, Menu } from 'antd';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Start from './components/Start/Start'
import Introduction from './components/Introduction/Introduction'
import Components from './components/Components/Components'
import Props from './components/Props/Props'
import ReactCreate from './components/ReactCreate/ReactCreate'
import VirtualDOM from './components/VirtualDOM/VirtualDOM';
import Axios from './components/Axios/Axios'
import Refs from './components/Refs/Refs'
import Key from './components/Key/Key'
import Events from './components/Events/Events'
import LifeCycle from './components/LifeCycle/LifeCycle'
import StateCom from './components/State/State'
import ReactFragment from './components/ReactFragment/ReactFragment'
import ReactMemo from './components/ReactMemo/ReactMemo'
import useEffect from './components/useEffect/useEffect'
import Router from './components/Router/Router'
import Context from './components/Context/Context'
import Forms from './components/Form/Form'
import Task from './components/Task/Task';

const { Header, Content, Footer } = Layout;

const App = () => {
  const list = ['Start','Task','Props',
              'Axios','Refs','Key','Events',
              'LifeCycle','State','ReactFragment',
              'ReactMemo','useEffect','Router',
              'Context', 'Form','VirtualDOM',
              'Introduction','ReactCreate','Components'];
const listComponents = [Start,Task,Props,
              Axios,Refs,Key,Events,
              LifeCycle,StateCom,ReactFragment,
              ReactMemo,useEffect,Router,
              Context, Forms,VirtualDOM,
              Introduction,ReactCreate,Components];
return <BrowserRouter>
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
  </BrowserRouter>};

export default App;