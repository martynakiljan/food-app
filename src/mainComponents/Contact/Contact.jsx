/** @format */
import * as React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="form">
      <h1 className="form__title">contact us!</h1>

      <form className="form__wrapper">
        <label className="form__label">
          Full Name:
          <input className="form__input" abel="Full Name" />
        </label>
        <label className="form__label">
          Email
          <input className="form__input" label="Email" />
        </label>
        <label className="form__label" >
          Message
          <textarea
            className="form__input form__input--textarea"
            label="Message"
          />
        </label>

        <button className="form__button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
