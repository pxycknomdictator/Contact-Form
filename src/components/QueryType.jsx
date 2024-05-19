import React, { useContext } from "react";
import radio from "/images/icon-radio-selected.svg";
import FormContext from "../store/FormContext";
import { SAVE_VALUEs } from "../store/FormContextProvider";

const QueryType = () => {
  const { state, dispatch } = useContext(FormContext);

  return (
    <div className="w-full mt-4">
      <span className="star">Query Type</span>

      <section className="grid grid-cols-1 mt-2 sm:grid-cols-2 gap-5">
        <label
          onClick={() =>
            dispatch({
              type: SAVE_VALUEs.general,
            })
          }
          className={`cursor-pointer transition-all ${
            state.general && "bg-lightgreen"
          } flex gap-2 border border-mediumgray rounded-[6px] py-2 pl-4`}
        >
          {state.general ? (
            <img className="w-4" src={radio} alt="radioIcon" />
          ) : (
            <input className="w-4" type="radio" id="general" name="query" />
          )}

          <span>General Enquiry</span>
        </label>

        <label
          aria-required
          onClick={() =>
            dispatch({
              type: SAVE_VALUEs.request,
            })
          }
          className={`cursor-pointer transition-all ${
            state.request && "bg-lightgreen"
          } flex gap-2 border border-mediumgray rounded-[6px] py-2 pl-4`}
        >
          {state.request ? (
            <img className="w-4" src={radio} alt="radioIcon" />
          ) : (
            <input className="w-4" type="radio" id="support" name="query" />
          )}
          <span>Support Request</span>
        </label>
      </section>
    </div>
  );
};

export default QueryType;
