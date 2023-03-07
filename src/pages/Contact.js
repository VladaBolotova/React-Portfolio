import React from "react";

function ContactMe() {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
      e.preventDefault()
      setFormStatus('Submitting...')
      const { name, email, message } = e.target.elements
      let conFom = {
        name: name.value,
        email: email.value,
        message: message.value,
      }
      console.log(conFom)
    }
    return (
      <div className="container mt-5">
        <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px', color: 'pink', marginTop: '100px' , fontSize: '50px'}}></form><h2 style={{fontSize: '40px'}}>Contact me</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name" style={{fontSize: '20px', marginLeft: '20px'}}>
              Name
            </label>
            <input className="form-control" type="text" id="name" required style={{marginLeft: '25px', marginBottom: '15px', height: '25px', width: '200px'}} />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email" style={{fontSize: '20px', marginLeft: '20px'}}>
              Email
            </label>
            <input className="form-control" type="email" id="email" required style={{marginLeft: '25px', marginBottom: '15px', height: '25px', width: '200px'}}/>
          </div>
          <div className="mb-3, " style={{fontSize: '20px', marginLeft: '20px'}}>
            <label className="form-label" htmlFor="message" >
              Message
            </label>
            <textarea className="form-control" id="message" required style={{width: '300px', height: '220px', marginTop: '20px', marginLeft: '5px'}}/>
          </div>
          <button className="btn btn-danger" type="submit" style={{marginTop: '20px', fontSize: '20px', marginLeft: '20px'}}>
            {formStatus}
          </button>
        </form>
      </div>
    )
  }

export default ContactMe;
