import React, {  useState, useEffect  }  from 'react'
//import imgabout from './H.png'
class Thing extends React.Component {//( props ) {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  image_new: CanvasImageSource;
  
  constructor(props: {}) {
    super(props);
    image_new = new Image(30, 30);
    image_new.src = "H.png";
    canvasRef = React.createRef();
  }  
  
  componentDidMount() {
    console.log("Did mount");
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
    
  
  render(){
  return (
      <div className = {props.className |"foo"}>
      <canvas ref= {props.ref |"canvas"} height = {props.height | 300} 
      width = { props.width | 300} />
      <img src = {"H.png"} height = {props.height | 30} width = { props.width | 30}/>
      <img src = {"X.png"} height = {props.height | 30} width = { props.width | 30}/>
      <img src = {"Z.png"} height = {props.height | 30} width = { props.width | 30}/>
      <img src = {"Y.png"} height = {props.height | 30} width = { props.width | 30}/>
      <img src = {"Not.png"} height = {props.height | 30} width = { props.width | 30}/>
      </div>
      
  );
  }
  
}

export default Thing;