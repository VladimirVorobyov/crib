import React from 'react';
import clases from './OldTask.module.css';
import { Button,Card } from 'antd';

export default function OldTask(props) {
 return <>
   <Card  className ={clases.card}  title={props.name} >
        <p>{props.discription}</p>
        <Button onClick={()=>props.remove(props.el)}>Удалить</Button>
      </Card>
 </>
} 