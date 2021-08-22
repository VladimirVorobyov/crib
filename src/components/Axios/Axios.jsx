import './Axios.css';
import lifePhoto from './life.png';
import F from '../Axios/F/F';
import randomePhoto from './randome.png'

export default function useEffect () {
  return(<div className='componets-container'>
    <div>
      <h2>Запросы через Axios</h2>
      <img className = "usePhoto" src={lifePhoto} alt="code" width="200" />
      <img className = "usePhoto" src={randomePhoto} alt="code" width="700" />
    </div>
    <F/>
  </div>)
}