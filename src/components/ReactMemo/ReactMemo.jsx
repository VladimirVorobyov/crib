import './ReactMemo.css';
import photoChuk from './React_chuk.png'

export default function ReactMemo () {
  return <>
    <h2>React.memo и React Хуки</h2>
    <div className="componets-container">
      <div>
      <p className="reactMemo_text">
        Если ваш компонент всегда рендерит одно и то же при неменяющихся пропсах, 
        вы можете обернуть его в вызов React.memo для повышения производительности 
        в некоторых случаях, мемоизируя тем самым результат. 
        Это значит, что React будет использовать результат последнего рендера,
        избегая повторного рендеринга.
      </p>
      <p>Этот метод предназначен только для оптимизации производительности.</p>
      <h2>export default React.memo(MyComponent)</h2>
      </div>
      <div>
        <img src={photoChuk} alt="code" width="400" />
      </div>
    </div>
  </>
}