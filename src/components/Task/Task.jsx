import React, {useState} from 'react';
import { nanoid } from 'nanoid';
import NewTask from './NewTask/NewTask';
import ListTask from './listTask/ListTask';

const Task = () => {
  const [list, addList] = useState([
    {id:nanoid(), name: 'React', discription:'one year'},
    {id:nanoid(), name: 'CSS', discription:'two year'},
    {id:nanoid(), name: 'JS', discription:'two year'},
  ])


 const createnewTasks = (newElem) => {
    addList([...list,newElem])
 }
 const removeTasks = (task) => {
   addList(list.filter((el)=>{
    return el.id !== task.id
   } ))
 }

  return(<>
  <div className='componets-container'>
   <NewTask create={createnewTasks}/>
   {list.length !== 0 ?
    <ListTask list={list}  remove ={removeTasks}  /> 
   :<h1>НЕТ ЗАДАЧ</h1> }
  </div>
  </>)
} 

export default Task