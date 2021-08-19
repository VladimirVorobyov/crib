import './State.css';
import { Button } from 'antd';
import React from 'react';
import photoCode from './stateClass.png';
import stateFun from './stateFun.png';

export default class State extends React.Component {
    constructor(){
        super();
        this.state = {
            count:0,
        }
    }
    handlerClick(){
        //this.setState({count:5})
        this.setState((state)=>({count:state.count + 1}))
        
    }

    render(){
        return <div className='componets-container'>
            <div className="state-text"> 
              <h2>Состояние компонента</h2>
              <h3>Что делает setState?</h3>
              <p>Метод setState() планирует изменение объекта состояния
                 (state) компонента. 
                Когда состояние меняется, компонент рендерится повторно.</p>
              <p>{this.state.count}</p>
              <Button type="primary" onClick={() => this.handlerClick()}>click</Button>
              <img className = "state-img" src={stateFun} alt="Code" width='630'></img>
            </div>
            <div>
            <img src={photoCode} alt="Code" width='630'></img>
            </div>
        </div>
    
    }
}