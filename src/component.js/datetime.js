import React from 'react'

const Date1 = () => {

    const name = "Anjali Rajawat";
    let newDate = new Date();
    // let currDate = newDate.getDate();
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
  return (
    <div>
        <h1>Hello my name is {name} </h1>
        <p>Current Date is {currDate} </p>
        <p>Current Time is {currTime} </p>
    </div>
  );
}

export default Date1 