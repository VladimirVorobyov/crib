import React,{useEffect,useState} from "react";
import { Button } from 'antd';

export default function F () {
  const[numbers,getNum] = useState([1]);
  const addNum = () => {
    const randomeNum = Math.round(Math.random()*10)
    getNum([...numbers,randomeNum]);
  } 
  useEffect(()=>{
    console.log('Компонент был отображен!');
    return ()=>{
      console.log('Компонент будет удален')
    }
  },[])
  return(<>
    <ul>
      {numbers.map((el,i)=>{
        return <li key={i}>{el}</li>
      })}
    </ul>
    <Button type="primary" onClick={addNum}>ADD</Button>
  </>)
} 