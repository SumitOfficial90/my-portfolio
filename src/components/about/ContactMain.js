import React from 'react'

export const ContactMain = () => {
  return (
    <div className='contact_div'>
        <div className='heading'>
            <h3>Contact Us</h3>
        </div>
        <div className='contact_div'>
            <div className='contact_box d-flex'>
                <label for="colour">
                    <img src='./images/user.svg' />
                </label>
                <input id="colour" type="text" placeholder='Name' />
            </div>
            <div className='contact_box d-flex'>
                <label for="colour">
                    <img src='./images/envelope.svg' />
                </label>
                <input id="colour" type="text" placeholder='Email' />
            </div>
            <div className='contact_box text_box d-flex'>
                <label for="colour">
                    <img src='./images/comment.svg' />
                </label>
                <textarea id="colour" placeholder='Message' />
            </div>
            <div className='contact_box'>
                <button type='submit'>Send Message</button>
            </div>  
        </div>  
    </div>
  )
}
