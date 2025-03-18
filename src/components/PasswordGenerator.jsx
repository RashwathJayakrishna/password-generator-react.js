import React from 'react'
import { useState } from 'react'
const PasswordGenerator = () => {
  return (
   <div className="password-generator">

    <h2>Strong Password Generator</h2>
    <div className="input-group">
        <label htmlFor="num">Password Length : </label>
        <input type="number" name="" id="num" />
    </div>
    <div className="checkbox-group">
        <input type="checkbox" name="" id="upper" />
        <label htmlFor="upper">Include Uppercase</label>
    </div>

    <div className="checkbox-group">
        <input type="checkbox" name="" id="lower" />
        <label htmlFor="lower">Include Lowercase</label>
    </div>

    <div className="checkbox-group">
        <input type="checkbox" name="" id="numbers" />
        <label htmlFor="numbers">Include Numbers</label>
    </div>

    <div className="checkbox-group">
        <input type="checkbox" name="" id="symbol" />
        <label htmlFor="symbol">Include Symbol</label>
    </div>

    <button className='generate-btn'>Generate Password</button>

    <div className="generated-password">
        <input type="text" name="" id="" readOnly/>
       <button className="copy-btn">Copy</button>
    </div>
   </div>


  )
}

export default PasswordGenerator
