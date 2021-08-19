import './Introduction.css';
import logo from './logo.svg'
export default function Introduction () {
  return(<>
    <img src={logo} alt={'Logo'} width='200'/>
    <h2>React -- JavaScript-библиотека</h2>
    <p>React был создан Джорданом Валке, разработчиком программного обеспечения из Facebook.</p> 
    <p>Впервые React использовался в новостной ленте Facebook в 2011 году и позже в ленте Instagram в 2012 году</p>
    <p>Исходный код React открыт в мае 2013 года на конференции «JSConf US».</p>
  </>) 
}
 
