import React, { useState } from "react";
import { CgPhone } from "react-icons/cg";
import { IoMdMail } from "react-icons/io";
import { useDispatch } from 'react-redux';
import * as ContactActions from '../../redux/action/contactActions';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ThankYouPage = ({ name }) => (
  <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8">
    <div className="bg-green-100 rounded-full p-4 mb-6">
      <svg
        className="w-12 h-12 text-green-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
    <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You, {name}!</h2>
    <p className="text-gray-600 max-w-md">
      We've received your message and will get back to you shortly. Thank you for reaching out to us!
    </p>
  </div>
);

const ContactUs = () => {
  const dispatch = useDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name can't exceed 50 characters")
      .required("Name is required"),
    phoneno: Yup.string()
      .matches(/^\d+$/, "Only numbers are allowed")
      .length(10, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
    agree: Yup.boolean().oneOf([true], "You must confirm the details"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data Submitted:", values);
    const { agree, ...filteredValues } = values;
    dispatch(ContactActions.addContactRequests(filteredValues));
    setSubmittedName(values.name);
    setIsSubmitted(true);
    resetForm();

    // Hide Thank You message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <div className="p-4 sm:p-4 md:p-8 lg:p-20 xl:p-[150px] mt-16 md:mt-0">
      <div className="bg-white p-10 rounded-2xl shadow-lg mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl text-green-500 italic mt-8 sm:mt-0">Lets stay in touch</h2>
          <h1 className="text-3xl font-bold text-gray-800 mt-2 w-full">
            Ready to bring your website and app <br /> ideas to life?
          </h1>
          <p className="text-gray-600 mt-4">
          Let's bring your next big venture to life! Whether you need a cutting-edge website, a powerful mobile app, or a results-driven digital marketing strategy, our expert team is ready to turn your vision into reality. Reach out today, and let's create something extraordinary together! 
          </p>
          <div className="mt-6 w-full">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-2 rounded-full">
                <CgPhone className="w-5 h-5" />
              </div>
              <div className="text-gray-700">
                <p>For urgent help</p>
                <div className="flex">
                  <span className="font-semibold text-gray-900 mr-2">+91 90279 38882</span>
                  {/* <span className="font-semibold text-gray-900">+91-6393377862</span> */}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <IoMdMail className="w-5 h-5" />
              </div>
              <p className="text-gray-700">
                Mail us 24/7 <br />
                <span className="font-semibold text-gray-900">
                info@vmktechsolutions.com
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-gray-50 p-6 rounded-2xl shadow-md">
          {isSubmitted ? (
            <ThankYouPage name={submittedName} />
          ) : (
            <Formik
              initialValues={{
                name: "",
                phoneno: "",
                email: "",
                message: "",
                agree: false
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="flex flex-col gap-4">
                  <div>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      className="p-2 border rounded w-full"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-xs" />
                  </div>

                  <div>
                    <Field
                      type="text"
                      name="phoneno"
                      placeholder="Enter Your Contact Number"
                      className="p-2 border rounded w-full"
                    />
                    <ErrorMessage name="phoneno" component="div" className="text-red-500 text-xs" />
                  </div>

                  <div>
                    <Field
                      type="text"
                      name="email"
                      placeholder="Enter Your Email"
                      className="p-2 border rounded w-full"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
                  </div>

                  <div>
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="How can we help you?"
                      rows="4"
                      className="p-2 border rounded w-full"
                    />
                    <ErrorMessage name="message" component="div" className="text-red-500 text-xs" />
                  </div>

                  <div>
                    <div className="w-full flex items-center space-x-2">
                      <Field type="checkbox" name="agree" className="w-4 h-4" />
                      <span>I confirm that the above details are correct.</span>
                    </div>
                    <ErrorMessage name="agree" component="div" className="text-red-500 text-xs" />
                  </div>

                  <button
                    type="submit"
                    className="mt-4 py-3 px-6 bg-green-700 text-white rounded-lg shadow-lg hover:shadow-xl focus:ring-4 focus:ring-green-300"
                  >
                    Submit Now
                  </button>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
