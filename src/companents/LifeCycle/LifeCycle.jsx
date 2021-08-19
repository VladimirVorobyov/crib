import './LifeCycle.css';
import lifePhoto from './life.png'
export default function LifeCycle () {
  return <div className="componets-container">
    <div className="life_component">
          <h2>Жизненый цикл</h2>
  <p>1) constructor(props): конструктор, в котором 
    происходит начальная инициализация компонента</p>
  <p>2) render() : рендеринг компонента </p>
  <p>3) componentDidMount() : вызывается после
     рендеринга компонента. 
     Здесь можно выполнять запросы к удаленным ресурсам.
     Вызывается один раз
     </p>
  <p> 4) componentDidUpdate(PrevProps,PrebState):
     вызывается сразу после обновления компонента 
     В качестве параметров передаются старые 
     значения объектов props и state.
     После изменения State
     </p>  
  <p>5) componentWillUnmount() : вызывается 
    перед удалением компонента из DOM</p>  
    </div>
  <div>
  <img src={lifePhoto} alt="life For" width='450'/>
  </div>
  </div>
}