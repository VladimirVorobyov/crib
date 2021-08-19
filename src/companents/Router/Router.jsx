import './Router.css';
import photoRouter from './router.png'
import photoWith from './withRouter.png'
export default function Router () {
  return <>
  <h1>Routing</h1>
  <h3>npm install react-router-dom</h3>
  <div className='componets-container'>
  <img src={photoRouter} className="photo__Router" alt="Code" width="600" />
  <img src={photoWith} alt="CodeWith" width="600" />
  </div>
  </>
}

