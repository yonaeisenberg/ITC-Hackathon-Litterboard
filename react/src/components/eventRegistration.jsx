import React from 'react'
// import 'react-phone-number-input/style.css'
// import 'react-phone-input-2/lib/style.css'
// import PhoneInput from 'react-phone-number-input'

class EventRegistration extends React.Component {
    render() {
        // const [value, setValue] = useState()
      return (
          <div> 
        <p> Sign up for an event! </p> 
        <form>
        <label> 
          Enter your First name:
          <input
        type="text" placeholder = "Enter your first name" />
        </label>  
        <br />
        <label> 
          Enter your Last name:
          <input
            type="text" placeholder = "Enter your last name"/>
           </label> 
            <br />
            <label> 
          Enter Event Name:
          <input
            type="text" placeholder = "Enter Event Name"/>
            </label>           
        <br />
        <label> 
        Enter your phone number:
        <input 
        type="tel" placeholder = "Enter your phone number"
        />
        </label> 
        <br />
        <input type="submit" value="Submit" />
        </form>
        </div> 
      )
  }
}

export default EventRegistration