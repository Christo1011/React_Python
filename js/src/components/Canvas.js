import React from 'react'

class Canvas extends React.Component {
componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
  } 
}
export default function Canvas{
    return(
      <div>
        <canvas ref="canvas" width={640} height={425} />
      </div>
    )
}
