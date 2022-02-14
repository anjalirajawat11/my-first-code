import React,{Component} from 'react';

//class component
class Great extends Component  { 
   render(){
    const {city, setCity} = this.props
    return (
    <div>
    <h1>  {city} {setCity} </h1>
    </div>
    )
   }
}

//functional component
// const Great = (props) =>  { 
//     const{city, setCity} = props
//      return (
//      <div>
//      <h1>  {city} {setCity} </h1>
//      </div>
//      )
//     }
 




export default Great;
