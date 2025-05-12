import { useState, useEffect } from 'react'
import { FiSend, FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import emailjs from 'emailjs-com'
import './Contact.css'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  })

 
  useEffect(() => {
    
    emailjs.init('LwOMJmlZOMZl9Tff8')
  }, [])

  const contactInfo = [
    {
      icon: <FiMapPin />,
      title: 'Location',
      info: 'Amroli , Surat'
    },
    {
      icon: <FiMail />,
      title: 'Email',
      info: 'jaydipbela1625@gmail.com'
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      info: '+91 75757843852'
    }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }


  const handleSubmit = (e) => {
    e.preventDefault()

   
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill in all required fields.'
      })
      return
    }

  
    setFormStatus({
      submitted: true,
      success: false,
      message: 'Sending message...'
    })

    const serviceID = 'jaydip@ahir' 
    const templateID = 'template_sym1yww' 

    const templateParams = {  
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || 'Portfolio Contact Form',
      message: formData.message,
      // to_email: 'jaydipbela1625@gmail.com'
    }

    emailjs.send(serviceID, templateID, templateParams)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)

        
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Message sent successfully! I will get back to you soon.'
        })
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })

        setTimeout(() => {
          setFormStatus({
            submitted: false,
            success: false,
            message: ''
          })
        }, 5000)
      })
      .catch((error) => {
        console.error('FAILED...', error)

        setFormStatus({
          submitted: true,
          success: false,
          message: 'Failed to send message. Please try again later.'
        })
      })
  }




  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-intro">
          <p>
            Have a project in mind or want to discuss a potential opportunity?
            Feel free to reach out to me using the form below or through any of
            the provided contact methods.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map((item, index) => (
              <div key={index} className="info-card">
                <div className="info-icon">
                  {item.icon}
                </div>
                <div className="info-details">
                  <h3>{item.title}</h3>
                  <p>{item.info}</p>
                </div>
              </div>
            ))}
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3718.47215696579!2d72.84291007584555!3d21.252769980045827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDE1JzEwLjAiTiA3MsKwNTAnNDMuOCJF!5e0!3m2!1sen!2sin!4v1746624640795!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name <span className="required">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email <span className="required">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message <span className="required">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                <FiSend /> Send Message
              </button>

              {formStatus.submitted && (
                <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact