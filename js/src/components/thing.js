import React from 'react'
//import imgabout from './H.png'
export default function Thing( props ) {
  return (
      <div className = {props.className |"foo"}>
      <canvas ref= {props.ref |"canvas"} height = {props.height | 300} 
      width = { props.width | 300} />
      <img src = {"H.png"} height = {props.height | 30} width = { props.width | 30}/>
      </div>
      
  );
}
