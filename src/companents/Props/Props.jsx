import './Props.css';
import funprops from "./fun-props.png"
import classProps from './class-props.png'
import photoRender from './render.png'

export default function Props () {
  return(<>
    <h2>Props</h2>
    <p>Как аргумент у функции</p>
    <div className ='componets-container'>
      <div>
        <h3>У функции</h3>
        <img src={funprops} alt='Code Function' width="450" ></img>
      </div>
      <div>
        <h3>У класса</h3>
        <img src={classProps} alt='Code Class' width="450" ></img>
      </div>
    </div>
     <img src={photoRender} alt='Code Render Component' width="450" ></img>
  </>) 
}