import React, { useState, useRef } from 'react'
import emailjs from 'emailjs-com';
import { ClipboardListIcon, MailIcon } from '@heroicons/react/outline'
import { CheckCircleIcon } from '@heroicons/react/solid'

import { RingLoader } from 'react-spinners'

function ContactUs() {
    const [isSent, setIsSent] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [loading, setLoading] = useState(false)
    const form = useRef();



    const sendEmail = (e) => {

        e.preventDefault();


        setLoading(true)
        setClicked(true)
        emailjs.sendForm('service_m2ob3k8', 'template_w61xw48', form.current, "user_0Mnkc44zS931z4MgLbLeO")
            .then((result) => {
                setLoading(false)
                setIsSent(true)
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });

    };
    return (
        <div className='font-mulish relative ' >

            <div className="flex flex-col md:flex-row items-center justify-center bg-indigo-800 space-x-0 md:space-x-40 py-20">
                <div className=" w-full text-center px-16 py-20 md:p-0 md:text-left md:w-[260px]">
                    <h1 className='text-5xl text-white font-semibold font-opensans'>Let's talk.</h1>
                    <p className='text-lg text-indigo-300 mt-4 '>Interested in product? Fill up the form and we can talking business right away.</p>
                </div>


                <div className=" bg-white rounded-md py-10  z-40 px-8  sm:px-12 sm:w-[384px] h-[505px]" id='contact'>
                    <form ref={form} onSubmit={sendEmail} className={` transform duration-75 ${clicked ? "hidden" : "block"}`}>
                        <p className=' mb-1 text-slate-700'>Name</p>
                        <div className="form--field--div mb-5 ">
                            <ClipboardListIcon className=' w-6 h-6 text-slate-500   ' />
                            <input type="text" name="name" id="" className='outline-none w-full bg-transparent text-slate-900 h-10 ' placeholder='John Doe' required />
                        </div>


                        <p className='mb-1 text-slate-700'>Mail</p>
                        <div className="form--field--div mb-5 ">
                            <MailIcon className=' w-6 h-6  text-slate-500 ' />
                            <input type="email" name="email" id="" className='outline-none w-full bg-transparent text-slate-900 h-10' placeholder='john@mail.com' required />
                        </div>

                        <p className='mb-1 text-slate-700'>Message</p>
                        <textarea name="message" id="" rows="4" className='form--field--div text-slate-900' placeholder='Message' required></textarea>



                        <button type="submit" className='w-full grid place-content-center rounded-md py-2 text-white mt-4 tracking-wide text-lg bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-900 active:shadow-inner'
                        > Submit</button>
                    </form>

                    <div className={`w-full h-full self-center mt-2 ${clicked ? 'flex' : "hidden"} flex-col items-center justify-center `}>
                        <RingLoader color={"#0369A1"} loading={loading} size={60} />
                        {isSent &&
                            (
                                <div className="flex flex-col items-center justify-center">
                                    <div className=" p-3 mb-8 rounded-full bg-indigo-800">
                                        <CheckCircleIcon className='w-6 h-6 text-indigo-50' />
                                    </div>
                                    <p>I received your messsage.</p>
                                    <p>I will get back to you soon.</p>
                                </div>
                            )
                        }

                    </div>
                </div>
                {/* END OF FORM DIV */}
            </div>




        </div>
    )
}

export default ContactUs
