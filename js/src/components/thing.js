import React from 'react'
import createRef from 'create-react-ref/lib/createRef';
import RefObject from 'create-react-ref/lib/createRef';

class Thing extends React.Component {
    canvasRef = RefObject()
    constructor(props){
        super(props);
        this.canvasRef = createRef();
        this.old_msg_callback = props.comm._msg_callback
        this.myHandleMsg = this.myHandleMsg.bind(this);
        props.comm.on_msg( this.myHandleMsg );
    }
    
    myHandleMsg(msg) {
        console.log("in handle msg" + JSON.stringify(msg));
        this.old_msg_callback(msg);
    }
    
    imageClick = (e) =>{
    this.a = e._targetInst._currentElement.props.src
    this.image_new = new Image(30, 30);
    this.image_new.src = this.a;
    }      
    render () {
        console.log("rendering now:" + this.props.data + ":" + JSON.stringify(this.props.new_data));
        return (
            <div className = {this.props.className |"foo"}>
            <canvas ref={this.canvasRef} 
            onDrop={this.onDropHandler}
            onDragOver={this.onDragOverHandler} 
            height = {this.props.height | 300} 
            width = { this.props.width | 300} />
            <img src = {"H.png"} height = {this.props.height | 30} width = { this.props.width | 30} onMouseDown={this.imageClick}/>
            <img src = {"X.png"} height = {this.props.height | 30} width = { this.props.width | 30} onMouseDown={this.imageClick}/>
            <img src = {"Y.png"} height = {this.props.height | 30} width = { this.props.width | 30} onMouseDown={this.imageClick}/>
            <img src = {"Z.png"} height = {this.props.height | 30} width = { this.props.width | 30} onMouseDown={this.imageClick}/>
            <img src = {"Not.png"} height = {this.props.height | 30} width = { this.props.width | 30} onMouseDown={this.imageClick}/>
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
    addString(y1: float,srcs: string){
        let arr_pos = y1%5
        var arr = []
        arr[arr_pos] = srcs
        //console.log(arr)
        return arr
        
    }

    onDropHandler = (ev: React.DragEvent) => {
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
        let location = 0;
        if(pos.y < 60){
            location = 5
            ctx.drawImage(this.image_new, pos.x - x / 2, location, 30, 30);
        }else if (pos.y > 60 && pos.y < 120){
            location = 65
            ctx.drawImage(this.image_new, pos.x - x / 2, location, 30, 30);
            location += 1
        }else if (pos.y > 120 && pos.y < 180){
            location = 125
            ctx.drawImage(this.image_new, pos.x - x / 2, location, 30, 30);
            location += 2
        }else if (pos.y > 180 && pos.y < 240){
            location =185
            ctx.drawImage(this.image_new, pos.x - x / 2, location, 30, 30);
            location += 3
        }

        this.calc = []
        this.result = []
        this.calc = this.addString(location, (this.a[0]) )
        debugger;
        this.props.comm.send({content: this.calc, buffers:['a', 'set']})
        console.log("calc " + this.calc)
        location = 0
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
