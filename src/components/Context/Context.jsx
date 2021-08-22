import './Context.css';
import React from 'react';
import photoConttext from './contextJs.png'
import photoApp from './app.png'
import photoProv from './provaider.png'
import photoChild from './children.png'
import photoValue from './value.png'

export default function Context () {
  return <>
  <h2>Context</h2>
  <h3>HOOKS</h3>
  <p>Используя контекст, мы можем избежать передачи свойств через промежуточные элементы:</p>
  <p>Создаем файл Context.js</p>
  <img src={photoConttext} alt="Code" width="450"></img>
  <p>Import в главный файл</p>
  <img src={photoApp} alt="Code" width="450"/>
  <p>обворачиваем весь jsx из app.js и записываем в value,что хотим пробросить в дочернии компоненты :</p>
  <img src={photoProv} alt="Code" width="450" />
  <p>В children компоненте import Context и useContext</p>
  <img src={photoChild} alt="Code" width="450"/>
  <p>Берем value, которые прописали у родителя и используем </p>
  <img src={photoValue} alt="Code" width="450" />
</>
}