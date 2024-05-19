import React from "react";
import FormBody from "./components/FormBody";
import SubmitNotification from "./components/SubmitNotification";
import FormContextProvider from "./store/FormContextProvider";

const App = () => {
  return (
    <FormContextProvider>
      <main className="relative w-screen h-screen overflow-x-auto grid place-items-center bg-lightgreen">
        <div>
          <SubmitNotification />
        </div>
        <FormBody />
      </main>
    </FormContextProvider>
  );
};

export default App;
