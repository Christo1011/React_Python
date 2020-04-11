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
        this.locationx = [1,1,1,1,1,1,1,1,1,1]
        this.n = 3
        
        props.comm.on_msg( this.myHandleMsg );
    }
    
    myHandleMsg(msg) {
        console.log("JavaScript Resive msg" + JSON.stringify(msg['content']['data']['content']));
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
            <div className = {this.props.className |"foo"} height = {this.props.height | 800} width = { this.props.width | 800} overflow = { this.props.overflow | scroll}>
            <canvas ref={this.canvasRef} 
            onDrop={this.onDropHandler}
            onDragOver={this.onDragOverHandler} 
            height = {this.props.height | 400} 
            width = { this.props.width | 800} />
            <img src = {"H.png"} height = {this.props.height | 30} width = { this.props.width | 30} onMouseDown={this.imageClick}/>
            <img src = {"X.png"} height = {this.props.height | 30} width = { this.props.width | 30} onMouseDown={this.imageClick}/>
            <img src = {"Y.png"} height = {this.props.height | 30} width = { this.props.width | 30} onMouseDown={this.imageClick}/>
            <img src = {"Z.png"} height = {this.props.height | 30} width = { this.props.width | 30} onMouseDown={this.imageClick}/>
            <img src = {"Igate.png"} height = {this.props.height | 30} width = { this.props.width | 30} onMouseDown={this.imageClick}/>
            <img src = {"Not.png"} height = {this.props.height | 30} width = { this.props.width | 30} onMouseDown={this.imageClick}/>
            </div>
            )
    }
    componentDidMount() {
        //debugger;
        var j1 = 1
        const image = new Image(30, 30);
        image.src = "H.png"
        const acanvas = this.canvasRef.current;
        if (acanvas) {
          const ctx = acanvas.getContext("2d");
          if (ctx) {
            let y1 = 20;
            const x1 = 10;
            const x2 = 800;
            let i: number;        
            for (i = 0; i < 10; i++) {
              ctx.beginPath();
              ctx.rect(x1, y1-15, 30, 30);
              //ctx.drawImage(this.image,x1, y1-15);
              ctx.moveTo(x1+30, y1);
              ctx.lineTo(x2, y1);
              ctx.stroke();
              y1 += 60;
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
    addString(y1: float,x1: int,n: int,srcs: string){
        var arr = new Array(2);  
        
        for (var i = 0; i < arr.length; i++) { 
            arr[i] = new Array(n); 
        } 
        for (var i = 0; i < 2; i++) { 
            for (var j = 0; j < n; j++) { 
                if (j == 0 ){
                    arr[i][j] = '0'
        
                }else if (y1 == i  && x1 == j){
                    arr[i][j] = srcs;
        
                }else{
                    arr[i][j] = '/'
            } 
        }
     
        } 
        arr = [['0', 'I', 'X', '/', '/', '/'], ['0', 'H', 'N', '/', '/', '/']]
        console.log("arr",arr)
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
            location = 0
            
        }else if (pos.y > 60 && pos.y < 120){
            location = 65
            ctx.drawImage(this.image_new, pos.x - x / 2, location, 30, 30);
            location = 1
        }else if (pos.y > 120 && pos.y < 180){
            location = 125
            ctx.drawImage(this.image_new, pos.x - x / 2, location, 30, 30);
            location = 2
        }else if (pos.y > 180 && pos.y < 240){
            location = 185
            ctx.drawImage(this.image_new, pos.x - x / 2, location, 30, 30);
            location = 3
        }else if (pos.y > 240 && pos.y < 300){
            location = 245
            ctx.drawImage(this.image_new, pos.x - x / 2, location, 30, 30);
            location = 4
        }else if (pos.y > 300 && pos.y < 360){
            location = 305
            ctx.drawImage(this.image_new, pos.x - x / 2, location, 30, 30);
            location = 5
        }else if (pos.y > 360 && pos.y < 420){
            location = 365
            ctx.drawImage(this.image_new, pos.x - x / 2, location, 30, 30);
            location = 6
        }else if (pos.y > 420 && pos.y < 480){
            location = 425
            ctx.drawImage(this.image_new, pos.x - x / 2, location, 30, 30);
            location = 7
        }else if (pos.y > 480 && pos.y < 540){
            location = 485
            ctx.drawImage(this.image_new, pos.x - x / 2, location, 30, 30);
            location = 8
        }else if (pos.y > 540 && pos.y < 600){
            location = 545
            ctx.drawImage(this.image_new, pos.x - x / 2, location, 30, 30);
            location = 9
        }

        this.calc = []
        this.result = []
        this.calc = this.addString(location, this.locationx[location] , this.n, (this.a[0]) )
        this.locationx[location] +=1
        this.n += 1        
        this.props.comm.send({content: this.calc})//, buffers:['a', 'set']})
        console.log("JavaScript send Msg " + this.calc )
        
        location = 0
        let limitx = 750;
        if (pos.x - x / 2 >= limitx) {
          let i: number;
          for (i = 0; i < 10; i++) {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y1);
            ctx.stroke();
            y1 += 60;
          }
          x1 = x2;
          x2 += 800;
          limitx += 250;
          console.log(x2, pos.x - x / 2, ">", limitx);
        }
      }
    }
    }
    onDragOverHandler = (ev: React.DragEvent) => {
        ev.preventDefault();
    };
}

export default Thing
