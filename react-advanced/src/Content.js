import React from "react";

function Content(props) {
  console.log("Mis à jour");
  return (
    <div className="content">
      {props.num}
    </div>
  )
}

export default React.memo(Content);