import React from 'react'
import { AreaChart } from 'react-easy-chart'

export default function Thing( props ) {
  return (
    <canvas ref= {props.ref |"canvas"} height = {props.height | 300} 
      width = { props.width | 300} />
  );
}
