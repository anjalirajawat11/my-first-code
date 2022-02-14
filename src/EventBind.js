import React, { Component } from 'react' 

class EventBind extends Component {
    constructor(props){
        super(props)

        this.state = {
            message: 'Hello'
        }
        // this.changeMessage = this.changeMessage.bind(this)
    }

    changeMessage =() =>{
        this.setState({
            message: "thanks for clicking"
        })
        console.log(this)
    }

    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick = {this.changeMessage.bind(this)}>Click</button> */}
                <button onClick={()=> this.changeMessage()}>CLick</button>
            </div>
        )
    }
}

export default EventBind