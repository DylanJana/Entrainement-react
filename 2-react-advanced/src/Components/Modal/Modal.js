import { useState } from "react";
import './Modal.css';

function Modal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  }
  return (
    <>
      <button
        onClick={toggleModal}
        className="btn-modal"
      >Open</button>
      {modal &&
        <div className="overlay">
          <div className="modal">
            <div className="modal__content">
              <h2>Hello Modale</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi perspiciatis molestias ratione voluptates, incidunt ducimus, nihil corrupti necessitatibus doloremque odio, unde quae error rerum est sit reiciendis nam sequi! Nostrum sint facere explicabo voluptate deserunt delectus distinctio, voluptates ratione nam beatae optio iusto cupiditate provident neque temporibus, magnam eveniet blanditiis!
              </p>
              <button
                onClick={toggleModal}
                className="close-modal">Close</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Modal;
