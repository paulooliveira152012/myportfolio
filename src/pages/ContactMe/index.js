import React from 'react';
import './style.css';

function ContactMe() {
  
  return (
    <form action="https://formsubmit.co/paulooliveira152012@gmail.com" method="POST">
      <div class="formGroup">
        <label for='name'>Name</label>
        <input type='text' name='name' required></input></div>
      <div class="formGroup">
      <label for='email'>Email</label>
        <input type='email' name='email' required></input></div>
       <div class="form-group">
          <textarea class="form-control" name="message" placeholder='Your message' rows="5"></textarea>
        </div>
     <button type="submit">Send</button>
    </form>
  );
}

export default ContactMe;
