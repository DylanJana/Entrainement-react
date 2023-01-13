import './item.css';
import Cat from './happy.svg';
function Item() {

  return (
    <div>
      <h1 className='titre--xxl'>Hello depuis Item</h1>
      <img 
        src={"assets/img/chiot.jpg"} 
        alt="Image d'un chien" 
      />
      {/* Icône svg d'un chat */}
      <img 
        src={Cat} 
        alt="Icône de chat" 
      />
    </div>
  )
}

export default Item;