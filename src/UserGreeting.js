import React, { Component } from 'react'


class UserGreeting extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }


// if/else conditional rendering
//  render() {
//      if(this.state.isLoggedIn) {
//          return(
//              <div>Welcome Anjali</div>
//          )
//      }
//      else {
//          return (
//               <div> Welcome Guest </div>
//                )
           
//      }
        
//  }

 //Element Variable conditional rendering

 render(){

     let message 
     if(this.state.isLoggedIn) {
         message = <div>My Name is Anjali</div>
         }
     else{
         message = <div>Welcome Anjali</div>
         }
    
     return <div>{message}</div>

 }

//Ternary conditional operator

//  render(){
//      return( 
//          this.state.isLoggedIn ?
//          (<div>Hello</div>) :
//         ( <div>Hyee</div>)
//          )
//      }

 

//short circuit operators

// render(){
//     return  this.state.isLoggedIn && 
//     <div>Hello guyss</div>
    

// }
 }

export default UserGreeting
