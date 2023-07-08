import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const form = useRef<any>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailCount, setEmailCount] = useState(0);

  const { name, email, message } = formData;

  useEffect(() => {
    const storedEmailCount = localStorage.getItem("emailCount");
    if (storedEmailCount) {
      setEmailCount(Number(storedEmailCount));
    }
  }, []);

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (emailCount >= 3) {
      // Check if the user has already sent 3 emails
      alert("You have reached the maximum limit of emails.");
      return;
    }

    if (!validateEmail(email)) {
      // Check if the user's email is valid
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID ?? "",
        process.env.REACT_APP_TEMPLATE_ID ?? "",
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setIsFormSubmitted(true);
          setEmailCount((prevCount) => prevCount + 1);
          localStorage.setItem("emailCount", String(emailCount + 1));
        },
        (error) => {
          console.log(error.text);
        }
      );
    form?.current.reset();
  };

  const validateEmail = (email: string) => {
    const emailRegex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
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
            animate={{ y: [15, -15, 15] }}
          >
            Thank You For <span> Getting In Touch! </span>
          </motion.h3>
        </div>
      )}
    </div>
  );
};

export default Contact;
