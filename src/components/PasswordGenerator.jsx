import React from 'react'
import { use } from 'react'
import { useState } from 'react'
const PasswordGenerator = () => {

    const [length,setLength]=useState(8);

    const [includeUppercase,setIncludeUppercase]=useState(true);
    const [includeLowercase,setIncludeLowercase]=useState(true);

    const [includeNumbers,setIncludeNumbers]=useState(true);
    const [includeSymbol,setIncludeSymbol]=useState(true);

    const [password,setPassword]=useState("");

    const generatePassword=()=>{

        let charSet="";
        if(includeUppercase) charSet+="ABCDEFGHIJKLMNOPQRSTUVZXYZ";
        if(includeLowercase) charSet+="abcdefghijklmnopqrstuvwxyz";
        if(includeNumbers) charSet+="0987654321";
        if(includeSymbol) charSet+="!@#$%^&*()_+=";

        console.log(charSet);

        let generatedPassword="";
        for(let i=0;i<length;i++){

            const randamIndex=Math.floor(Math.random()* charSet.length);

            generatedPassword += charSet[randamIndex];

        }

        setPassword(generatedPassword);

    }

const copyToClickBoard=()=>{
    navigator.clipboard.writeText(password);
    alert("Password Copied");
}

  return (
   <div className="password-generator">

    <h2>Strong Password Generator</h2>
    <div className="input-group">
        <label htmlFor="num">Password Length : </label>
        <input type="number" name="" id="num" value={length} onChange={(e)=>setLength(parseInt(e.target.value))}/>
    </div>
    <div className="checkbox-group">
        <input type="checkbox" name="" id="upper" checked={includeUppercase} onChange={(e)=>setIncludeUppercase(e.target.checked)}/>
        <label htmlFor="upper">Include Uppercase</label>
    </div>

    <div className="checkbox-group">
        <input type="checkbox" name="" id="lower" checked={includeLowercase} onChange={(e)=>setIncludeLowercase(e.target.checked)}/>
        <label htmlFor="lower">Include Lowercase</label>
    </div>

    <div className="checkbox-group">
        <input type="checkbox" name="" id="numbers" checked={includeNumbers} onChange={(e)=>setIncludeNumbers(e.target.checked)}/>
        <label htmlFor="numbers">Include Numbers</label>
    </div>

    <div className="checkbox-group">
        <input type="checkbox" name="" id="symbol" checked={includeSymbol} onChange={(e)=>setIncludeSymbol(e.target.checked)}/>
        <label htmlFor="symbol">Include Symbol</label>
    </div>

    <button className='generate-btn' onClick={generatePassword}>Generate Password</button>

    <div className="generated-password">
        <input type="text" name="" id="" readOnly value={password}/>
       <button className="copy-btn" onClick={copyToClickBoard}>Copy</button>
    </div>
   </div>


  )
}

export default PasswordGenerator
