import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter,FaLinkedinIn } from "react-icons/fa";




const Contact = () => {
  return (
    <div className="mx-24 pb-24 min-h-dvh">
      {/* <div className="bg-gray-100 min-h-screen p-6"> */}
      <div className="w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>

        <p className="text-gray-600 mb-6">
          We're here to help! Whether you have questions about our vehicles,
          services, or need assistance, feel free to reach out to us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Our Showroom Address:
            </h2>
            <p className="text-gray-600">
              010 Higuredori,
              <br />
              Kobe City, State, ZIP Code
            </p>
            <iframe
              className="w-full h-64 mt-4"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3530.0657307942433!2d135.1922198415409!3d34.693419534838114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sjp!4v1719242736010!5m2!1sen!2sjp"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div className="w-full">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Contact Information:
            </h2>
            <p className="text-gray-600">
              <strong>Phone Numbers:</strong>
              <br />
              General Inquiries: (123) 456-7890
              <br />
              Sales Department: (123) 456-7891
              <br />
              Service Department: (123) 456-7892
              <br />
              Parts Department: (123) 456-7893
            </p>
            <p className="text-gray-600 mt-4">
              <strong>Email Addresses:</strong>
              <br />
              General: info@carshowroom.com
              <br />
              Sales: sales@carshowroom.com
              <br />
              Service: service@carshowroom.com
              <br />
              Parts: parts@carshowroom.com
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Business Hours:
          </h2>
          <p className="text-gray-600">
            <strong>Showroom Hours:</strong>
            <br />
            Monday to Friday: 9:00 AM - 7:00 PM
            <br />
            Saturday: 10:00 AM - 6:00 PM
            <br />
            Sunday: Closed
          </p>
          <p className="text-gray-600 mt-4">
            <strong>Service Center Hours:</strong>
            <br />
            Monday to Friday: 8:00 AM - 6:00 PM
            <br />
            Saturday: 9:00 AM - 5:00 PM
            <br />
            Sunday: Closed
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Get in Touch with Us:
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                className="border border-gray-300 p-2 rounded"
                placeholder="Name"
              />
              <input
                type="email"
                className="border border-gray-300 p-2 rounded"
                placeholder="Email"
              />
            </div>
            <input
              type="text"
              className="border border-gray-300 p-2 rounded w-full"
              placeholder="Phone Number"
            />
            <input
              type="text"
              className="border border-gray-300 p-2 rounded w-full"
              placeholder="Subject"
            />
            <textarea
              className="border border-gray-300 p-2 rounded w-full"
              placeholder="Message"
              rows="4"
            ></textarea>
            <button className="w-full bg-red-400 text-white text-xl px-4 py-2 rounded-lg">
              Submit
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Follow Us:
          </h2>
          <div className="flex space-x-4 ">
            <FaFacebook size={32} color='blue'/>
            <FaInstagram size={32} color='orange'/>
            <FaTwitter size={32} />
            <FaLinkedinIn size={32} color='blue' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact
