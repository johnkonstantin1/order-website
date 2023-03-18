import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contacts.css";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #1c2237, rgb(47, 79, 79));
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  background: linear-gradient(to bottom, #1c2237, rgb(47, 79, 79));
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }

  input,
  textarea {
    padding: 1rem;
    font-size: 1.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-top: 1rem;
    width: 100%;
    max-width: 600px;
  }

  input[type="submit"] {
    background-color: #0077cc;
    color: #fff;
    padding: 1rem;
    border: none;
    border-radius: 5px;
    margin-top: 1.5rem;
    cursor: pointer;
    width: 100%;
    max-width: 600px;

    &:hover {
      background-color: #005fa3;
    }
  }
`;

function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ve8te89",
        "template_4ay4sfd",
        form.current,
        "CjgFMApitfOdFTLSa"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    // <>
    //   <div>
    //     <form ref={form} onSubmit={sendEmail}>
    //       <label>Name</label>
    //       <input type="text" name="user_name" />
    //       <label>Email</label>
    //       <input type="email" name="user_email" />
    //       <label>Message</label>
    //       <textarea name="message" />
    //       <input type="submit" value="Send" />
    //     </form>
    //   </div>
    // </>
    <FormContainer>
      <FormWrapper>
        <Form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </Form>
      </FormWrapper>
    </FormContainer>
  );
}

export default Contacts;
