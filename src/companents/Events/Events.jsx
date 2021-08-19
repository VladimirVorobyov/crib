import './Events.css';
import React from 'react';
import photoEv from './ev.png'

export default function Events () {
  const [text, getText] = React.useState('');
  const [count,getCount] = React.useState(0)
  return <div className='componets-container'>
    <div>
  <h2>События</h2>
  <p>{count}</p>
  <button onClick={()=>getCount(count+1)}>Click</button>
  <p>{text}</p>
  <input type="text" onChange={(e)=>getText('name----'+e.target.value)} />
  </div>
  <div>
    <img src={photoEv} alt="Code" width='800' />
  </div>
  </div>
}