import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"
import { useMediaQuery } from 'react-responsive'

function Contact() {
    const inmobile=useMediaQuery({maxWidth:767})
    // service ID: 
    const formRef = useRef()
    const [loading, setloading] = useState(false)
    const [form, setform] = useState({
        name: "",
        email: "",
        message: ""
    })

    const formChange = ({target:{name,value}}) => { 
        setform({...form,[name] : value})
    }

    const submitHandler = async(e) => { 
        e.preventDefault()
        setloading(true)
        try {
           await emailjs.send( "service_hbltnfl","template_hfa0242",{
                from_name:form.name,
                to_name:"javed ansari",
                from_email:form.email,
                to_email:"ansarijaved092004@gmail.com",
                message:form.message
            },"T1f5rY3VpaJtK0hYB")
            setloading(false)
            setform({email:"",name:"",message:""})
            alert("message sended successfully")
        } catch (error) {
            setloading(false)
            alert("message did not get sended")
        }
    }
    return (
        <section className='c-space my-20' id='contact'>
            <div className='relative min-h-screen flex flex-col items-center justify-center  '>
               {!inmobile  &&  <img src="/assets/terminal.png" alt="terminal-bg" className="absolute min-h-screen" />}
                <div className='contact-container'>
                    <h3 className='head-text pt-28'>Let's talk</h3>
                    <p className='text-white text-lg'>I'm a MERN Stack and React Native Expo developer available for freelance projects and full-time roles. If you have a project in mind or looking to hire, feel free to reach out. Let's turn your ideas into reality</p>
                    <form action="" className='mt-12 space-y-7 flex flex-col' onSubmit={submitHandler}>
                        <label className='space-y-3'>
                            <span className='field-label'>Full Name</span>
                            <input
                                type="text"
                                name='name'
                                value={form.name}
                                onChange={formChange}
                                required
                                placeholder='Jhon doe'
                                className='field-input'
                            />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Your email</span>
                            <input
                                type="email"
                                name='email'
                                value={form.email}
                                onChange={formChange}
                                required
                                placeholder='Jhondoe@gmail.com'
                                className='field-input'
                            />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Your message</span>
                            <textarea
                                name='message'
                                rows={5}
                                
                                value={form.message}
                                onChange={formChange}
                                required
                                placeholder='Hi I wanna give you a job...'
                                className='field-input resize-none'
                                onDragOver={false}
                            />
                        </label>
                        <button className='field-btn'>
                            {loading? "sending..." : "send"}
                            <img src="/assets/arrow-up.png" alt="arrow" className='field-btn_arrow' />
                        </button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact
