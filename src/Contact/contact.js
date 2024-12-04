import React from "react";
import './contact.css';


function Contact(){
  const onSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);

    formData.append("access_key", "fe31b57c-6ae1-40b8-bc4d-3e0b87fb06ad");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      
      event.target.reset();
    } else {
      console.log("Error", data);
      
    }
  };
    
    return(
        <>
        <div className="contacttt" id="contact">
            <div className="headi">
                <h1>Contact Me</h1>
                <div className="afterl"></div>
                <div className="contactla">
                    <h2>Contact Me</h2>
                    <span>please fill out the form below to discuss any work oppurtunity.</span>

                    <form className='conatactfrom' onSubmit={onSubmit}>

                        <input type="text" className="name" placeholder="Your Name" name="your_name" required />
                        <input type="email" className="email" placeholder="Your Email" name="your_email" required/>
                        <textarea  className='textare' name="message" rows='10' placeholder="Your Message" required></textarea>
                        <button type="submit" className="btnsub">Send</button>
                    </form>
                </div>

            </div>

        </div>
        </>
    )
}
export default Contact;

