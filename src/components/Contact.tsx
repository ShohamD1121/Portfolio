import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const form: any = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    emailjs
      .sendForm(
        "service_xne7jxb",
        "template_1c5vtrr",
        form.current,
        "i4Ma9iw8nDyzcYwQ0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setIsFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <div className="contact">
      <h2 className="contact_title">
        Feel Free to <span> Contact Me, </span> I Am Currently Available For{" "}
        <span> Work </span>
      </h2>
      {!isFormSubmitted ? (
        <form className="contact_form" ref={form}>
          <div>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </form>
      ) : (
        <div className="contact_message_sent">
          <motion.h3
            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
            animate={{ y: [15, -15, 15]}}
          >
            Thank You For <span> Getting In Touch! </span>
          </motion.h3>
        </div>
      )}
    </div>
  );
};

export default Contact;
