import React from "react";
import checkBox from "/images/icon-checkbox-check.svg";

const SubmitForm = () => {
  return (
    <div className="flex flex-col gap-5 mt-5">
      <div className="flex items-center gap-4">
        <input className="w-4 h-4 sm:w-5 sm:h-5" type="checkbox" id="check" />
        <img className="w-4 sm:w-5" src={checkBox} alt="checkbox" />
        <label
          className="cursor-pointer text-[.7rem] sm:text-[1rem]"
          htmlFor="check"
        >
          I consent to being contacted by the team
        </label>
      </div>
      <input
        className="font-semibold text-white bg-green py-2 rounded-[6px]"
        type="submit"
        value="Submit"
      />
    </div>
  );
};

export default SubmitForm;
