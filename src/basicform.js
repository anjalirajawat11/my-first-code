import React, {useState} from 'react';
import  "./Style.css";


const Basicform = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [allEntry , setAllEntry] = useState([]);
    const [err,setErr] = useState(false)
    const submitForm = (e) => {
        e.preventDefault()
       if(email === "" || password === ""){
        setErr(true)
       }else{
        const newEntry = { email: email , password: password};
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
       }  
    } 



    return (
    <>
        <form  onClick={(e)=>submitForm(e)}>
            <div className="total">
        <div className="form">
            <div className="top"><label htmlfor="email">Email</label></div>
            <div><input type ="text" name="email" id="email" autoComplete="Off" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            /></div>
        </div>
        <div className="form">
           <div> <label htmlfor="password">Password</label></div>
            <div><input type ="Password" name="password" id="password" autoComplete="Off" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            /></div>
        </div>
       <button type="submit" className= "block" >Login</button>
        </div>

        </form>
      <div className="error">  { err == true ? <h6>Please fill the missing fields</h6>:""}</div>

        <div>
            {
              allEntry && allEntry.length>0 &&  allEntry.map((curElem) => {
                    return (
                        <div className="showDetails">
                            <p>{curElem.email}</p>
                            <p>{curElem.password}</p>
                        </div>
                    )
                })
            }
        </div>
        </>
    );
};
    

export default Basicform;