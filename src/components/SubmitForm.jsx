import React, { useContext } from "react";
import checkBox from "/images/icon-checkbox-check.svg";
import FormContext from "../store/FormContext";
import { SAVE_VALUEs } from "../store/FormContextProvider";

const SubmitForm = () => {
  const { state, dispatch } = useContext(FormContext);

  return (
    <div className="flex flex-col gap-5 mt-5">
      <div className="flex items-center gap-4">
        {state.check ? (
          <img className="w-4 sm:w-5" src={checkBox} alt="checkbox" />
        ) : (
          <input className="w-4 h-4 sm:w-5 sm:h-5" type="checkbox" id="check" />
        )}
        <label
          className="cursor-pointer text-[.7rem] sm:text-[1rem]"
          htmlFor="check"
          onClick={() =>
            dispatch({
              type: SAVE_VALUEs.check,
            })
          }
        >
          I consent to being contacted by the team
        </label>
      </div>
      <input
        onClick={() =>
          dispatch({
            type: SAVE_VALUEs.submit,
          })
        }
        className="cursor-pointer font-semibold text-white bg-green py-2 rounded-[6px]"
        type="submit"
        value="Submit"
      />
    </div>
  );
};

export default SubmitForm;
