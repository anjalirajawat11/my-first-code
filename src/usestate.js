import React from 'react';
// import "./example.css";

export default App;

// function Example(){
//     var[num,changeNum]=useState(1);

//     return(
//         <div>
//             <p>On click :{num} change</p>
//             <button onClick={()=> changeNum(num+1)}>click me!</button>
//         </div>
//     )
// }

// function Anjali (){
//     const [count, setCount]=useState(1);
//     useEffect(()=>{
//         console.log(count)
//     }
//     )
//     return (
//         <div>
//             <p>Increase number :{count} change</p>
//             <button onClick ={()=> setCount(count+1)}>Click me !</button>
//         </div>
//     )
// }
const App =() => {
    return (
        <div>
            <h1>hello</h1>
            <input type="text" placeholder= "Enter your Name" />
            <button>click me</button>
        </div>
        
    );
};
