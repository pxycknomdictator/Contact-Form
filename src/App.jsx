import React from "react";
import FormBody from "./components/FormBody";
import checkbox from "../public/images/icon-checkbox-check.svg"
import radio from "../public/images/icon-radio-selected.svg";
import success from "../public/images/icon-success-check.svg";


const App = () => {
  return (
    <main className="w-screen h-screen grid place-items-center bg-lightgreen">
      <FormBody />
    </main>
  );
};

export default App;
