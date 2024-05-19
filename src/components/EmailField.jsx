import React, { useContext } from "react";
import FormContext from "../store/FormContext";
import { SAVE_VALUEs } from "../store/FormContextProvider";

const EmailField = () => {
  const { state, dispatch } = useContext(FormContext);

  return (
    <div className="w-full mt-4 flex flex-col gap-2">
      <label className="star" htmlFor="Email">
        Email Address
      </label>
      <input
        required
        type="email"
        className="border border-mediumgray rounded-[6px] py-2 pl-4"
        placeholder="codingbaba69@gmail.com"
        value={state.Email}
        onChange={(event) =>
          dispatch({
            type: SAVE_VALUEs.Email,
            payload: {
              userEmail: event.target.value,
            },
          })
        }
      />
    </div>
  );
};

export default EmailField;
