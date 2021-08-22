import React,{useState} from "react";
import './useEffect.css';
import F from './F/F';
import { Button } from 'antd';
import lifeFun from './lifeFun.png'


export default function useEf () {
 const[visible,setVisible] = useState(true);
 const handlerClick = () => {
   setVisible((visible)=>!visible)
 }
  return(<div className='componets-container '>
    <div>
      <h2>useEffect</h2>
      <p>При обновлении компонента</p>
      <p>ComponentDidMount - useEffect(()<code>=></code> ,  [ ] )</p>
      <p>ComponentDidUpdate - useEffect(()<code>=></code>, [state])</p>
      <p>ComponentWillUnmount - useEffect(()<code>=></code><code></code><code>return()=></code>,  [ ])</p>
      <Button onClick={handlerClick}>Скрыть</Button>
       {visible && <F/>}
    </div>
    <div>
      <img src={lifeFun} alt="Code" width='600'></img>
    </div>
  </div>)
}