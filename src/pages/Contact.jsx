import React, { useState } from 'react'
import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/common-section/CommonSection'
const Contact = () => {
   const [enteredName,setEnteredName] =useState('')
    const [enteredEmail,setEnteredEmail] =useState('')
    const [userMsg,setUserMsg] =useState('')
    const submittedHandler = e=>{
      e.preventDefault()
    }
  return <>
    
    <Helmet title='contact'>

    <CommonSection title='Contact Us'/>
    <div className='mt-5'>
    <h2 className=' text-center mb-5'>Contact Us</h2>
    <form className='form mb-5' onClick={submittedHandler}>
                  <div className='form_group'>
                    <input type="text" required placeholder='Enter your Name' value={enteredName} onChange={e=>setEnteredName(e.target.value)}/>
                  </div>
                  <div  className='form_group'>
                    <input type="email" required placeholder='Enter your Email' value={enteredEmail} onChange={e=>setEnteredEmail(e.target.value)}/>
                  </div>
                  <div  className='form_group'>
                    <textarea type="text" required rows={6} value={userMsg} placeholder='Enter your Message' onChange={e=>setUserMsg(e.target.value)}></textarea>
                  </div>
                  <button type='submit' className='addToCart_btn'>Submit</button>
                </form>
    </div>
    </Helmet>
  </>
}

export default Contact