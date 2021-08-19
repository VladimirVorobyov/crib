import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Button } from 'antd';

export default function F() {
  const [count,SetCount] = useState('');
  async function featchData () {
    const res = await axios.get('https://dog.ceo/api/breeds/image/random');
    SetCount(res.data.message)
  } 
  useEffect (()=> featchData(),[])
  
  return (<div>
    <img src={count} alt="asd"/>
    
      <Button type="primary" onClick={()=>featchData()}>Click</Button>
   
    
    
  </div>);
}
