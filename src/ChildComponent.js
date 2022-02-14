import React from 'react'

function ChildComponent (props) {
return  (
    <div>
        <button onclick ={() =>props.greetHandler('child')} >Greet parent</button>
    </div>
)

}
export default ChildComponent