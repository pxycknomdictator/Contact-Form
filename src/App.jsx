import React from "react";
import FormBody from "./components/FormBody";
import SubmitNotification from "./components/SubmitNotification";


const App = () => {
  return (
    <main className="relative w-screen h-screen overflow-x-auto grid place-items-center bg-lightgreen">
      <div>
        <SubmitNotification />
      </div>
      <FormBody />
    </main>
  );
};

export default App;
