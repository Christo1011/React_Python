import React from 'react'

/*class Canvas extends React.Component {
componentDidMount() {
    const canvas = this.refs.canvas
    //let canvas = ReactDOM.findDOMNode(this.refs.canvas)
    const ctx = canvas.getContext("2d")
  } 
}
export default function Canvas{
    return(
      <div>
        <canvas ref="canvas" width={640} height={425} />
      </div>
    )
}*/

export default function canvas(props){
    return(
        <canvas ref= {props.ref |"canvas"} height = {props.height | 300} 
      width = { props.width | 300} />
      
        );
}
