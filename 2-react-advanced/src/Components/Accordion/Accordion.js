import { useState, useRef, useEffect } from "react";
import './Accordion.css';
import Chevron from './chevron.svg';

function Accordion() {

  const [toggle, setToggle] = useState(false);
  // State height of element
  const [heightEl, setHeightEl] = useState();

  const toggleState = () => {
    setToggle(!toggle);
  }

  // Take accordion__content as reference
  const refHeight= useRef();

  useEffect(() => {
    // Get height of my accordion__content
    setHeightEl(`${refHeight.current.scrollHeight}px`)
  }, [])


  return (
    <div className="accordion">
      <div
      onClick={toggleState}
      className="accordion-heading">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <img src={Chevron} alt="chevron down" />
      </div>

      <div 
      ref={refHeight} 
      className={toggle ? 'accordion__content animated' : 'accordion__content'}
      style={{height: toggle ? `${heightEl}` : "0px"}}>
        <p
        aria-hidden={toggle ? "true" : "false"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque adipisci provident obcaecati deleniti error id minus rem culpa est tempore. Omnis laudantium et natus repudiandae tenetur commodi nobis quia sunt.
        </p>

      </div>
    </div>
  )
}

export default Accordion;
