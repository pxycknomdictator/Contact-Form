import React, { useContext } from "react";
import success from "../../public/images/icon-success-check.svg";
import FormContext from "../store/FormContext";
const SubmitNotification = () => {
  const { state } = useContext(FormContext);

  return (
    <>
      {state.notification && (
        <section className="absolute w-10/12 py-9 text-2xl text-center top-1/2 flex flex-col items-center sm:w-auto sm:top-16 sm:text-xl lg:top-10 lg:text-xs sm:text-left sm:items-start left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-darkgray rounded-lg sm:py-3 px-6">
          <div className="flex items-center gap-3">
            <img src={success} alt="successIcon" />
            <span className="font-semibold text-xl">Message Sent!</span>
          </div>
          <p className="mt-2">
            Thanks for completing the form. We'll be in touch soon!
          </p>
        </section>
      )}
    </>
  );
};

export default SubmitNotification;
