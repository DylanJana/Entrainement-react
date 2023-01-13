import { useState } from "react";

function Item(props) {
  // Create new state
  const [itemState, setItemState] = useState('Item State !')

  return (
    <div>
      {/* props.func est également à la propriété func de ma props, qui est
      égal à la fonction modifyState */}
      <button onClick={() => props.func(itemState)}>Change state</button>
    </div>
  )
}

export default Item;