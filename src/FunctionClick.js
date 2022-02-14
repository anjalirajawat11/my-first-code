
//functionClick event
// import { render } from '@testing-library/react';
// import React from 'react';
 
// function FunctionClick() {

// function clickHandler(){
//     console.log("Button clicked")
// }

//     return(
// <div>
//     <button onClick = {clickHandler}>Click</button>
// </div>

//     )
// }
// export default FunctionClick


//classClick event
import React, {Component} from 'react';
 
class ClassClick extends Component {
    clickHandler(){
        console.log("click the button")
    }



    render() {
    return(
<div>
    <button onClick = {this.clickHandler}>Click</button>
</div>

    )

  }
}
export default ClassClick

