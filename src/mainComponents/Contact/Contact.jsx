/** @format */
import { useEffect, useState } from "react";
import * as React from "react";
import "./Contact.scss";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [formCorrect, setFormCorrect] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (e, data) => {
    setFormCorrect(true);
    reset();
  };

  useEffect(() => {
    if (formCorrect) {
      const timer = setTimeout(() => {
        setFormCorrect(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [formCorrect]);

  return (
    <div className="form">
      <h1 className="form__title">contact us!</h1>

      <form className="form__wrapper" onSubmit={handleSubmit(onSubmit)}>
        <label className="form__label">
          Name:
          <input
            className="form__input"
            label="Name"
            {...register("name", {
              required: true,
              minLength: 3,
              maxLength: 15,
            })}
          />
        </label>
        {errors?.name?.type === "required" && <p>This field is required</p>}
        {errors?.name?.type === "minLength" && (
          <p className="error"> name must consist of at least 3 letters...</p>
        )}
        {errors?.name?.type === "maxLength" && (
          <p>I think this name is a bit too long - max 15 characters </p>
        )}
        <label className="form__label">
          Email
          <input
            className="form__input"
            label="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              },
            })}
          />
        </label>
        {errors?.email?.type === "pattern" && (
          <p className="error">Invalid email address </p>
        )}
        <label className="form__label">
          Message
          <textarea
            {...register("message", {
              required: true,
              minLength: 10,
              maxLength: 1000,
            })}
            className="form__input form__input--textarea"
            label="Message"
          />
        </label>
        {errors?.message?.type === "minLength" && (
          <p className="error">Write something more! (min 10 characters) </p>
        )}
        <button className="form__button" type="submit">
          Submit
        </button>

        {formCorrect ? <p className="form-correct">Thank you!</p> : null}
      </form>
    </div>
  );
};

export default Contact;
