import React from "react";
import NameFields from "./NameFields";
import EmailField from "./EmailField";
import QueryType from "./QueryType";
import Message from "./Message";
import SubmitForm from "./SubmitForm";

const FormBody = () => {
  return (
    <form className="bg-white rounded-lg py-6 px-7 w-full lg:w-[700px]">
      <h1 className="font-semibold text-3xl">Contact Us</h1>
      <NameFields />
      <EmailField />
      <QueryType />
      <Message />
      <SubmitForm />
    </form>
  );
};

export default FormBody;
