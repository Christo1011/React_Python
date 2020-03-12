import React from 'react'
import createRef from 'create-react-ref/lib/createRef';
import RefObject from 'create-react-ref/lib/createRef';


class Thing extends React.Component {
    canvasRef = RefObject()
    constructor(props){
        super(props);
        this.canvasRef = createRef();
    }
    
    render () {

        return (
            <div className = {this.props.className |"foo"}>
            <canvas ref={this.canvasRef} height = {this.props.height | 300} 
            width = { this.props.width | 300} />
            <img src = {"H.png"} height = {this.props.height | 30} width = { this.props.width | 30}/>
            <img src = {"X.png"} height = {this.props.height | 30} width = { this.props.width | 30}/>
            <img src = {"Y.png"} height = {this.props.height | 30} width = { this.props.width | 30}/>
            <img src = {"Z.png"} height = {this.props.height | 30} width = { this.props.width | 30}/>
            <img src = {"Not.png"} height = {this.props.height | 30} width = { this.props.width | 30}/>
            </div>
            )
    }
    componentDidMount() {
    const acanvas = this.canvasRef.current;
        if (acanvas) {
      const ctx = acanvas.getContext("2d");
      if (ctx) {
        let y = 20;
        const x1 = 10;
        const x2 = 300;
        let i: number;
        for (i = 0; i < 4; i++) {
          ctx.beginPath();
          ctx.moveTo(x1, y);
          ctx.lineTo(x2, y);
          ctx.stroke();
          y += 60;
        }
      }
    }
  }
}

export default Thing
