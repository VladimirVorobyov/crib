import React from 'react';
import clases from './ListTask.module.css';
import OldTask from '../OldTask/OldTask';
import SortTasks from '../SortTasks/SortTasks';

export default function ListTask({list,remove,value,addItemSort,
  addSerchValue, serchValue, defaultValue,options}){
  return(
    <div>
      <h2 className={clases.heading}>Список задач</h2>
      <SortTasks addSerchValue={addSerchValue} serchValue={serchValue}
        defaultValue={defaultValue} options={options} 
        value={value} addItemSort={addItemSort}/> 
      <div className={clases.container}>
         {list.map((el)=><OldTask el={el} remove={remove} key={el.id} name ={el.name} discription = {el.discription} />)}
      </div>
   
    </div>

  )
} 