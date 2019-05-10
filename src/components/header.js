import React from "react"

export default props => (
<div>
  <h1>{props.headerText}</h1>
  {props.arbitraryPhrase !== undefined &&<p>{props.arbitraryPhrase}</p>}
  <p style={{color: 'green'}}>{props.myProps}</p>
</div>
)
