import assets from "../assets/assets"
import Title from "./Title"
import { useState } from "react"
import toast from "react-hot-toast"


const ContactUs = () => {
  const onsubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    
    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission!");
        event.target.reset();
      } else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    }


  }

  return (
    <div id='ContactUs' className='w-full flex flex-col items-center dark:text-white text-gray-700 pt-30 sm:px-12 lg:px-24 xl:px-40 py-20 px-4 gap-7'>
      <Title title='Reach Out to Us' desc='Get in touch with our team for any inquiries or support.' />

      <form onSubmit={onsubmit} className="w-lg grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <p className="mb-2 text-sm font-medium">Your Name</p>

          <div className="flex pl-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 px-3">
            <img src={assets.person_icon} alt="Person Icon" />
            <input name='name' type="text" className="w-full p-3 text-sm focus:outline-none" placeholder="Enter your name" required />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">Your Email</p>

          <div className="flex pl-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 px-3">
            <img src={assets.email_icon} alt="Email Icon" />
            <input name='email' type="email" className="w-full p-3 text-sm focus:outline-none" placeholder="Enter your email" required />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea name='message' rows={8} className="w-full p-3 text-sm focus:outline-none rounded-lg border-2 border-gray-300 dark:border-gray-600" placeholder="Enter your message" required></textarea>

        </div>

        <button type="submit" className='w-max flex gap-2 bg-primary text-white px-10 py-3 rounded-full transition-all hover:scale-103 cursor-pointer'>
          Submit <img src={assets.arrow_icon} alt="Send Icon" className="w-4" />

        </button>

      </form>
    </div>
  )
}

export default ContactUs