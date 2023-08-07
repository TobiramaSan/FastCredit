import React from "react";
import Header from "../../components/header/Header";
import ContactUs from "../../components/contact-us/contactUs";
import Office from "../../components/office-flex/office";
import Footer from "../../components/footer/Footer";
const Contact = () => {
  return (
    <div className="contact">
      <Header />
      <ContactUs />
      <Office />
      <Footer />
    </div>
  );
};

export default Contact;
