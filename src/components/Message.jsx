import React, { useContext } from "react";
import FormContext from "../store/FormContext";
import { SAVE_VALUEs } from "../store/FormContextProvider";

const Message = () => {
  const { state, dispatch } = useContext(FormContext);

  return (
    <div className="mt-4">
      <label htmlFor="message">Message</label>
      <textarea
        required
        className="mt-2 w-full border border-mediumgray h-28 py-2 px-3 rounded-[6px]"
        name="message"
        id="message"
        placeholder="Your Message"
        value={state.Message}
        onChange={(event) =>
          dispatch({
            type: SAVE_VALUEs.Message,
            payload: {
              userMessage: event.target.value,
            },
          })
        }
      ></textarea>
    </div>
  );
};

export default Message;
