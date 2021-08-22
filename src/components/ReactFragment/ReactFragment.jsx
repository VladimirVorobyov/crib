import './ReactFragment.css';
import photoFram from './photoFragmen.png';

export default function ReactFragment () {
  return(
    <>
      <h2>Фрагменты</h2>
      <p>Возврат нескольких элементов из компонента является распространённой практикой в React.</p>
      <p>Фрагменты позволяют формировать список дочерних элементов, не создавая лишних узлов в DOM.</p>
      <img src={photoFram} alt="fragment" width='400' />
    </>
  ) 
}