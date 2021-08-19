import './Key.css';
import photoKey from './keys.png'

export default function Key () {
  return <div>
    <h2>Ключи</h2>
    <p>Лучший способ выбрать ключ — это использовать строку,
       которая будет явно отличать элемент списка от его соседей. 
      Чаще всего вы будете использовать ID из ваших данных как ключи:
    </p>
    <img src={photoKey} alt="Code" width='350' />
  </div>
}