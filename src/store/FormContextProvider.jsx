import React, { useReducer } from "react";
import FormContext from "./FormContext";

export const SAVE_VALUEs = {
  firstName: "userName",
  LastName: "userLastName",
  Email: "userEmail",
  Message: "userMessage",
  general: "toggle",
  request: "toggler",
  check: "checked",
  submit: "submitForm",
};

const initailvalues = {
  firstName: "",
  LastName: "",
  Email: "",
  Message: "",
  general: false,
  request: false,
  check: false,
  notification: false,
};

const submitFormData = (
  firstName,
  LastName,
  Email,
  Message,
  general,
  request,
  check
) => {
  return (
    firstName !== "" &&
    LastName !== "" &&
    Message !== "" &&
    Email !== "" &&
    (general || request) &&
    check
  );
};

const FormReducer = (FormPreviousState, action) => {
  switch (action.type) {
    case SAVE_VALUEs.firstName:
      return { ...FormPreviousState, firstName: action.payload.username };
    case SAVE_VALUEs.LastName:
      return { ...FormPreviousState, LastName: action.payload.userLastName };
    case SAVE_VALUEs.Email:
      return { ...FormPreviousState, Email: action.payload.userEmail };
    case SAVE_VALUEs.Message:
      return { ...FormPreviousState, Message: action.payload.userMessage };
    case SAVE_VALUEs.general:
      return { ...FormPreviousState, general: true, request: false };
    case SAVE_VALUEs.request:
      return { ...FormPreviousState, general: false, request: true };
    case SAVE_VALUEs.check:
      return { ...FormPreviousState, check: true };
    case SAVE_VALUEs.submit:
      const { firstName, LastName, Email, Message, general, request, check } =
        FormPreviousState;
      if (
        submitFormData(
          firstName,
          LastName,
          Email,
          Message,
          general,
          request,
          check
        )
      ) {
        return { ...initailvalues, notification: true };
      }

    default:
      return FormPreviousState;
  }
};

const FormContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FormReducer, initailvalues);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
