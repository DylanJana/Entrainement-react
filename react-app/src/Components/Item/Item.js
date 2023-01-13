import './item.css';
import { ReactComponent as Cat } from './happy.svg';
function Item() {

  return (
    <div>
      <h1 className='titre--xxl'>Hello depuis Item</h1>
      <img 
        src={"assets/img/chiot.jpg"} 
        alt="Image d'un chien" 
      />
      {/* Icône svg d'un chat comme un composant */}
      <Cat />
    </div>
  )
}

export default Item;