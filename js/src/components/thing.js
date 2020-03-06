import React from 'react'

class Thing extends React.Component {

    
    render () {

        return (
            <div className = {this.props.className |"foo"}>
            <canvas ref="canvas" height = {this.props.height | 300} 
            width = { this.props.width | 300} />
            <img src = {"H.png"} height = {this.props.height | 30} width = { this.props.width | 30}/>
            </div>
            )
    }
}

export default Thing
