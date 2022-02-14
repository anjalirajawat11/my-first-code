import React from 'react' 

function NameList() {

    const person = [
        {
            id:1,
            name: 'Bruce', 
            age:30,
            skill: React,
        },
    ]
    const personList = person.map(person => <h2> i am {person.name}. i am{person.age} years old</h2>)
    return(
        <div>
           {
            //    names.map(name => <h2>{name}</h2>)                       
               personList 
           }
        </div>
    )
}

export default NameList 