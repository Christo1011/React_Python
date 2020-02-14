import React from 'react'

export default function Thing( props ) {
  return (
      <img height = {props.height | 30} 
      width = { props.width | 30}
      src = { props.img } />
      
  );
}
