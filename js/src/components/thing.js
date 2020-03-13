import React from 'react'
import createRef from 'create-react-ref/lib/createRef';
import RefObject from 'create-react-ref/lib/createRef';


class Thing extends React.Component {
    canvasRef = RefObject()
    constructor(props){
        super(props);
        this.canvasRef = createRef();
    }
    imageClick = (src: string) => {
    console.log('Click!!!!' + src);
    }      
    render () {

        return (
            <div className = {this.props.className |"foo"}>
            <canvas ref={this.canvasRef} 
            onDrop={this.onDropHandler}
            onDragOver={this.onDragOverHandler} 
            height = {this.props.height | 300} 
            width = { this.props.width | 300} />
            <img src = {"H.png"} height = {this.props.height | 30} width = { this.props.width | 30} onMouseDown={this.imageClick(src)}/>
            <img src = {"X.png"} height = {this.props.height | 30} width = { this.props.width | 30} />
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

    getMousePos(canvas1: HTMLCanvasElement, ev: React.MouseEvent) {
    const acanvas = canvas1.getBoundingClientRect();
    let rect = acanvas,
      scaleX = acanvas.width / rect.width,
      scaleY = acanvas.height / rect.height;
    return {
      x: (ev.clientX - rect.left) * scaleX,
      y: (ev.clientY - rect.top) * scaleY
    };
  }

    onDropHandler = (ev: React.DragEvent) => {
        console.log("I'm dropping" + ev);
    ev.preventDefault();
    const acanvas = this.canvasRef.current;
    if (acanvas) {
      const ctx = acanvas.getContext("2d");
      if (ctx) {
        let pos = this.getMousePos(acanvas, ev);
        let x = +this.image_new.width;
        let y = +this.image_new.height;
        let y1 = 20;
        let x1 = 10;
        let x2 = 600;
        ctx.drawImage(this.image_new, pos.x - x / 2, pos.y - y / 2, 30, 30);
        let limitx = 250;
        if (pos.x - x / 2 >= limitx) {
          let i: number;
          for (i = 0; i < 4; i++) {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y1);
            ctx.stroke();
            y1 += 60;
          }
          x1 = x2;
          x2 += 300;
          limitx += 250;
          console.log(x2, pos.x - x / 2, ">", limitx);
        }
      }
    }
    }
    onDragOverHandler = (ev: React.DragEvent) => {
        //console.log("I'm dragging" + ev);
        ev.preventDefault();
    };
}

export default Thing
