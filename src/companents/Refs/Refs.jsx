import './Refs.css';
import React,{useRef} from 'react';
import refsPhoto from './refs.png'
import { Button } from 'antd';

export default function Refs () {
  const elRef = useRef();
  React.useEffect(()=>elRef.current.focus(),[])
  return <div className='componets-container'>
    <div>
      <h2>Рефы</h2>
      <p className="ref_text">Рефы дают возможность получить доступ к DOM-узлам 
        или React-элементам,созданным в рендер-методе.
      </p>
      <Button onClick={()=>elRef.current.focus()}>Focus</Button>
      <input type="text" ref={elRef} />
      <Button  type="primary" onClick={(()=> console.log(elRef.current.value))}>Console</Button>
    </div>
    <div>
      <img src={refsPhoto} alt="Code" width="700"/>
    </div>
  </div>
}