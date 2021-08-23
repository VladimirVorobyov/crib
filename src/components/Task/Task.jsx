import React, {useState} from 'react';
import { nanoid } from 'nanoid';
import NewTask from './NewTask/NewTask';
import ListTask from './listTask/ListTask';

const Task = () => {
  const [list, addList] = useState([
    {id:nanoid(), name: 'HTML', discription:3},
    {id:nanoid(), name: 'CSS', discription:4},
    {id:nanoid(), name: 'JS', discription:5},
    {id:nanoid(), name: 'React', discription:2},
  ])

  const [itemSelect,addSelect] = useState('');
  const [serchValue, setSerchValue] = useState('');
 const addSerchValue = (newElem) => {
    setSerchValue(newElem)
    console.log(newElem)
 }
 

 const addItemSort = (sort)=> {
   addSelect(sort);
 }
 
 const createnewTasks = (newElem) => {
    addList([...list,newElem])
 }
 const removeTasks = (task) => {
   addList(list.filter((el)=>{
    return el.id !== task.id
   } ))
 }
 function getListSort (){
    if(itemSelect){
      
      (itemSelect === 'discription')?
  addList([...list].sort((a,b)=>a[itemSelect] - b[itemSelect]))
  :addList([...list].sort((a,b)=>a[itemSelect].localeCompare(b[itemSelect])))
  console.log(itemSelect === 'discription')
    }
    return list
 }
 
    
  return(<>
  <div className='componets-container'>
   <NewTask create={createnewTasks}/>
   
   {list.length !== 0 ?
    <ListTask addSerchValue={addSerchValue} serchValue={serchValue}
    value={itemSelect} addItemSort={addItemSort}
    defaultValue={"Сортировка по"} 
    options={[{value:'name',name:"Названию"},{value:'discription',name:"Описанию"}]}
    list={getListSort()}  remove ={removeTasks}  /> 
   :<h1>НЕТ ЗАДАЧ</h1> }
  </div>
  </>)
} 

export default Task