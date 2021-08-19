import './Components.css';
import functionPhoto from './function.png'
import classPhoto from './class.png'

export default function Components () {
  return(<>
    <h2>React.Component</h2>
    <p>Приложение состоит из кирпичиков разметки -- Component</p>
    <div className="componets-container">
      <div>
        <h4>Function Component</h4>
        <img src={functionPhoto} alt='Code' width="400"></img>
      </div>
      <div>
        <h4>Class Component</h4>
        <img src={classPhoto} alt='Code' width="400"></img>
      </div>
    </div>
    
    <p>функция/class возвращает разметку jsx</p>
    </>
  )
}